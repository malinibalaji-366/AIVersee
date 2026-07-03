import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY! ,});
export async function POST(req: Request) {
    try {
        const { message } = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content:`
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
                    - Keep reponses under 200 words.
                    - End with a question whenever possible.
                    `,
                },
                {
                    role: "user",
                    content:message,
                },
            ],
        });
        return NextResponse.json({
            message:
            Completions.choices[0].message.content,
        });
        return NextResponse.json({
            message:
            Completions.choices[0].message.content,
        });
    }catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message:"Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }   
}
