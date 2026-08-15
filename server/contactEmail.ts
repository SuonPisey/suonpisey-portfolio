export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function parseContactMessage(value: unknown): ContactMessage | null {
  if (!value || typeof value !== "object") return null;

  const payload = value as Record<string, unknown>;
  const fields = ["name", "email", "subject", "message"] as const;
  if (fields.some((field) => typeof payload[field] !== "string")) return null;

  const contact = Object.fromEntries(
    fields.map((field) => [field, (payload[field] as string).trim()]),
  ) as ContactMessage;

  if (fields.some((field) => !contact[field])) return null;
  if (
    contact.name.length > MAX_FIELD_LENGTH ||
    contact.email.length > MAX_FIELD_LENGTH ||
    contact.subject.length > MAX_FIELD_LENGTH ||
    contact.message.length > MAX_MESSAGE_LENGTH
  ) {
    return null;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(contact.email) ? contact : null;
}

export async function sendContactEmail(contact: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured");

  const to = process.env.CONTACT_TO_EMAIL || "suonpisey017@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: contact.email,
      subject: `[Portfolio] ${contact.subject}`,
      text: `From: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>From:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(contact.subject)}</p>
        <hr />
        <p>${escapeHtml(contact.message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend rejected contact email:", response.status, details);
    throw new Error("Email provider rejected the message");
  }
}
