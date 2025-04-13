const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY", // ή από env μεταβλητή
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
