import { NextRequest, NextResponse } from 'next/server';
import { add } from '@/lib/calculator';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { numbers } = body;

  try {
    const result = add(numbers);
    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}