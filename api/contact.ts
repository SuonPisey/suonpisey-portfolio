import type { IncomingMessage, ServerResponse } from "node:http";
import {
  parseContactMessage,
  sendContactEmail,
} from "../server/contactEmail.js";

type ApiRequest = IncomingMessage & { body?: unknown };

async function readBody(req: ApiRequest) {
  if (req.body) return req.body;

  let rawBody = "";
  for await (const chunk of req) rawBody += chunk;
  return JSON.parse(rawBody);
}

export default async function handler(req: ApiRequest, res: ServerResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const contact = parseContactMessage(await readBody(req));
    if (!contact) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Please provide valid form details." }));
      return;
    }

    await sendContactEmail(contact);
    res.statusCode = 200;
    res.end(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Contact endpoint failed:", error);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ error: "Unable to send your message right now." }),
    );
  }
}
