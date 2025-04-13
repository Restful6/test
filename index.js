const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;

  // Αντικατέστησε με το δικό σου AI logic
  const fakeResponse = `You said: "${prompt}" — This is a fake reply from Nexis!`;

  res.json({ reply: fakeResponse });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NEXIS Proxy Server running on port ${PORT}`);
});
