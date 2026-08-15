import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { parseContactMessage, sendContactEmail } from "./contactEmail.js";

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

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
