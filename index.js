const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const response = await axios.post('https://churchless.tech/api/gpt', { prompt });
    res.json({ reply: response.data });
  } catch (error) {
    res.status(500).json({ reply: 'Σφάλμα κατά την επικοινωνία με το AI.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
