require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const testData = req.body;
  //console.log(testData);
})

app.get('/', async (req, res) => {
  res.send('hello world');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello, how are you?' },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
}
