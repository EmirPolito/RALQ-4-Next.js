export async function GET() {
  return Response.json({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "NO-RECIBIDA",
    domain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "NO-RECIBIDO",
  });
}
