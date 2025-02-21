require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  let userMessage = req.body.userMessage;
  res.send(JSON.stringify({aiMessage: await studybotSummary(userMessage)}));
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

async function studybotSummary(message) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `You are a scholar in every field of research. Use the following step-by-step instructions when responding to user input.
          
          Step 1 - The user will provide you with text relating to some academic field. Summarize the text in one paragraph with a prefix that says summary. The summary should be easy to understand without modifying the meaning of the initial text and/or leaving out key points.
          
          Step 2 - Based on the user input, generate 5-10 dot points that outline the key aspects of the input with a prefix that says dot point summary.` },
        { role: 'user', content: message },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
}
