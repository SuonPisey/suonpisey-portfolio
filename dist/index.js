// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// server/contactEmail.ts
var MAX_FIELD_LENGTH = 200;
var MAX_MESSAGE_LENGTH = 5e3;
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function parseContactMessage(value) {
  if (!value || typeof value !== "object") return null;
  const payload = value;
  const fields = ["name", "email", "subject", "message"];
  if (fields.some((field) => typeof payload[field] !== "string")) return null;
  const contact = Object.fromEntries(
    fields.map((field) => [field, payload[field].trim()])
  );
  if (fields.some((field) => !contact[field])) return null;
  if (contact.name.length > MAX_FIELD_LENGTH || contact.email.length > MAX_FIELD_LENGTH || contact.subject.length > MAX_FIELD_LENGTH || contact.message.length > MAX_MESSAGE_LENGTH) {
    return null;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(contact.email) ? contact : null;
}
async function sendContactEmail(contact) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured");
  const to = process.env.CONTACT_TO_EMAIL || "suonpisey017@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: contact.email,
      subject: `[Portfolio] ${contact.subject}`,
      text: `From: ${contact.name}
Email: ${contact.email}

${contact.message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>From:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(contact.subject)}</p>
        <hr />
        <p>${escapeHtml(contact.message).replaceAll("\n", "<br />")}</p>
      `
    })
  });
  if (!response.ok) {
    const details = await response.text();
    console.error("Resend rejected contact email:", response.status, details);
    throw new Error("Email provider rejected the message");
  }
}

// server/index.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "10kb" }));
  app.post("/api/contact", async (req, res) => {
    const contact = parseContactMessage(req.body);
    if (!contact) {
      res.status(400).json({ error: "Please provide valid form details." });
      return;
    }
    try {
      await sendContactEmail(contact);
      res.json({ success: true });
    } catch (error) {
      console.error("Contact endpoint failed:", error);
      res.status(500).json({ error: "Unable to send your message right now." });
    }
  });
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
