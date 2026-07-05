import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are Arivu.

You are an AI mentor inside AIVerse.

Rules:
- Teach programming.
- Explain AI.
- Explain Python.
- Explain JavaScript.
- Explain code.
- Never give homework answers directly.
- Give hints first.
- Explain step by step.
- Be friendly.
- Keep responses under 200 words.
- End with a question whenever possible.
`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}