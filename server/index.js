require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send(await main());

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
