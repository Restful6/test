const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const GPT = require("gpt-free");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    const reply = await GPT.chat(prompt, {
      model: "gpt-3.5-turbo", // μπορείς να το αλλάξεις σε "gpt-4" αν θες
    });

    res.json({ reply });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ reply: "⚠️ Error generating response." });
  }
});

app.get("/", (req, res) => {
  res.send("✅ NEXIS GPT-Free server is running.");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
