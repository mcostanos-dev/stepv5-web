import { headers } from "next/headers";

export async function GET(req) {
  const headerList = headers(req);
  const ip = headerList.get("x-forwarded-for") || "IP not available";
  const referer = headerList.get("referer") || "Referrer is not Available";

  return new Response(JSON.stringify({ ip, referer }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
