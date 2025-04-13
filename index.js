const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "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", // ή από env μεταβλητή
});

app.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ reply: "⚠️ Error generating response." });
  }
});
