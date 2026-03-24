import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

function orNotProvided(val: string | undefined | null): string {
  return val && String(val).trim() ? String(val).trim() : "Not provided";
}

function parseEmailRecipients(envValue: string | undefined): string[] {
  if (!envValue || typeof envValue !== "string") return [];
  return envValue
    .split(",")
    .map((e) => e.trim())
    .filter((e) => e.length > 0);
}

function parsePhoneRecipients(envValue: string | undefined): string[] {
  if (!envValue || typeof envValue !== "string") return [];
  return envValue
    .split(",")
    .map((p) => p.trim().replace(/\s/g, ""))
    .filter((p) => p.length > 0)
    .map((p) => (p.startsWith("+") ? p : `+${p}`));
}

const PLACEHOLDER_PATTERN = /your_|placeholder|example\.com|xxx|todo/i;

function looksLikePlaceholder(val: string | undefined): boolean {
  if (!val || typeof val !== "string") return true;
  const s = val.trim();
  return s.length === 0 || PLACEHOLDER_PATTERN.test(s);
}

function isTwilioConfigured(notifyMode: string): boolean {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromSms = process.env.TWILIO_FROM_SMS;
  const fromWhatsApp = process.env.TWILIO_FROM_WHATSAPP;

  if (!accountSid?.trim() || !accountSid.startsWith("AC")) return false;
  if (looksLikePlaceholder(accountSid)) return false;
  if (!authToken?.trim() || looksLikePlaceholder(authToken)) return false;

  if (notifyMode === "whatsapp") {
    const from = fromWhatsApp?.replace(/^whatsapp:/i, "").trim();
    return !!(from && !looksLikePlaceholder(from));
  }
  return !!(fromSms?.trim() && !looksLikePlaceholder(fromSms));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const {
      firstName,
      lastName,
      workEmail,
      company,
      jobTitle,
      message,
    } = body;

    if (!firstName || !workEmail || !company) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const fullName = lastName ? `${firstName} ${lastName}`.trim() : firstName.trim();
    const ts = new Date().toISOString();

    const fromEmail = process.env.FROM_EMAIL || "Altamark <onboarding@resend.dev>";
    const toEmails = parseEmailRecipients(process.env.DEMO_TO_EMAIL);
    const emailRecipients = toEmails.length > 0 ? toEmails : ["KRISHNA.KARTHIKMN@GMAIL.COM", "KRISHNA.KAUSHIKMN@GMAIL.COM"];

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailHtml = `
      <h2>New Demo Request — Altamark</h2>
      <p><strong>First name:</strong> ${firstName}</p>
      <p><strong>Last name:</strong> ${orNotProvided(lastName)}</p>
      <p><strong>Work email:</strong> ${workEmail}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job title:</strong> ${orNotProvided(jobTitle)}</p>
      <p><strong>Message:</strong> ${orNotProvided(message)}</p>
      <p><strong>Submitted:</strong> ${ts}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: emailRecipients,
      subject: "New Demo Request — Altamark",
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    const notifyMode = (process.env.DEMO_NOTIFY_MODE || "sms").toLowerCase();
    const fromSms = process.env.TWILIO_FROM_SMS;
    const fromWhatsApp = process.env.TWILIO_FROM_WHATSAPP;
    const phoneRecipients = parsePhoneRecipients(process.env.DEMO_NOTIFY_PHONE);
    const phones = phoneRecipients.length > 0 ? phoneRecipients : ["+919880089246", "+9188675118729"];
    const text = `New Demo Request — Altamark
Name: ${fullName}
Email: ${workEmail}
Company: ${company}
Job Title: ${orNotProvided(jobTitle)}
Message: ${orNotProvided(message)}`;

    if (isTwilioConfigured(notifyMode) && phones.length > 0) {
      const accountSid = process.env.TWILIO_ACCOUNT_SID!;
      const authToken = process.env.TWILIO_AUTH_TOKEN!;
      try {
        const client = twilio(accountSid, authToken);
        for (const phone of phones) {
          try {
            if (notifyMode === "whatsapp" && fromWhatsApp) {
              const waTo = phone.startsWith("+") ? `whatsapp:${phone}` : `whatsapp:+${phone}`;
              await client.messages.create({
                from: fromWhatsApp.startsWith("whatsapp:") ? fromWhatsApp : `whatsapp:${fromWhatsApp}`,
                to: waTo,
                body: text,
              });
            } else if (fromSms) {
              await client.messages.create({
                from: fromSms,
                to: phone,
                body: text,
              });
            }
          } catch (twilioErr) {
            console.error(`Twilio notification failed for ${phone}:`, twilioErr);
          }
        }
      } catch (twilioErr) {
        console.error("Twilio client init or send failed:", twilioErr);
      }
    } else if (phones.length > 0) {
      console.warn("Twilio not configured, skipping phone notification");
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Demo API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
