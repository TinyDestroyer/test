import { NextResponse } from "next/server";

export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const msg = "hello Shubh!!! this is your query : " + query;
    return NextResponse.json(msg);
}