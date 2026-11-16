# SEO Audit Tool Web

React dashboard for the SEO Audit Tool. It requires the API gateway from the separate backend repository to run audits.

## Development

Use Node.js 24.18 or later. Start the backend gateway on port 8080, then:

```sh
cp .env.example .env
npm ci
npm run dev
```

Open http://localhost:3000. `API_GATEWAY_URL` sets the Vite proxy target; `VITE_API_URL` defaults to `/api` and can be an absolute API URL ending in `/api` when connecting directly to a gateway on another origin. Vite embeds `VITE_API_URL` at build time; do not put secrets in it.

## Docker

```sh
docker build -t seo-audit-tool-web .
docker run --rm -p 3000:80 seo-audit-tool-web
```

The container proxies `/api` to `http://host.docker.internal:8080` by default. Override it with `-e API_GATEWAY_URL=http://gateway-host:8080` if needed. On Linux, add `--add-host=host.docker.internal:host-gateway` when using the default. For a direct browser API URL, build with `--build-arg VITE_API_URL=https://gateway.example.com/api`; the default image uses `/api`.
