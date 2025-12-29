import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'CVFinal.pdf')
    const pdf = await readFile(filePath)

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Dor_Cohen_CV.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 })
  }
}


