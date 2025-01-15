import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function GET(req: Request){
    console.log("yaha hote hai msgs");

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const msg = "hello Shubh!!! This is your query : " + query;
    const data = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `${query}`,
          },
        ],
        model: "llama-3.3-70b-versatile",
        max_tokens: 300,
    });

    console.log("chalo jaa rha hu!!!");

    return NextResponse.json(data.choices[0].message.content);
}