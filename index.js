require('dotenv').config();
const { OpenAI } = require('openai');

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

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
