import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function POST()
{
    const message = "Welcome to POST Method";

    return NextResponse.json({message})
}