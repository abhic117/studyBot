require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  let userMessage = req.body.message;
  res.send(JSON.stringify({message2: await main(userMessage)}));
  // console.log(userMessage);
})

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

async function main(message) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
}
