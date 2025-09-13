import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""
  const parts = host.split(".")
  let sub = ""
  if (parts.length > 2) {
    sub = parts[0]
  }
  const res = NextResponse.next()
  if (sub) {
    res.headers.set("x-tenant", sub)
  }
  return res
}
