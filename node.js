import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi",
        prompt: message,
        stream: false
      })
    });

    const data = await response.json();
    res.json({ reply: data.response || data.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Sorry, kuch error ho gaya 😅" });
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
