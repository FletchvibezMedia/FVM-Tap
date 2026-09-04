import { clients } from "./clients";

interface Env { ASSETS: Fetcher }

const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Robots-Tag": "noindex, nofollow"
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=60", ...securityHeaders }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/+|\/+$/g, "");

    if (path === "health") return json({ ok: true, service: "FVM Tap" });

    if (path.startsWith("api/client/")) {
      const slug = decodeURIComponent(path.slice("api/client/".length)).toLowerCase();
      const client = clients[slug];
      return client ? json(client) : json({ error: "Page not found" }, 404);
    }

    const isAsset = path.includes(".") || path.startsWith("assets/");
    const assetRequest = isAsset ? request : new Request(new URL("/index.html", url), request);
    const response = await env.ASSETS.fetch(assetRequest);
    const headers = new Headers(response.headers);
    Object.entries(securityHeaders).forEach(([key, value]) => headers.set(key, value));
    if (!isAsset) headers.set("cache-control", "no-cache");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
};
