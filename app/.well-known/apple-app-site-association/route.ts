export const dynamic = "force-static";

const AASA = {
  applinks: {
    details: [
      {
        appIDs: ["Q55W99PTDF.com.reveriedreams.reverie"],
        components: [
          {
            "/": "/auth/*",
            comment: "Supabase auth deep links (magic link, recovery, signup confirm)",
          },
        ],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(AASA), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=3600",
    },
  });
}
