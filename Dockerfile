# ── Build stage ───────────────────────────────────────────────────────────
FROM node:22 AS builder
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @workspace/covertcare-site build
RUN pnpm --filter @workspace/api-server build

# ── Run stage ─────────────────────────────────────────────────────────────
FROM node:22-alpine

RUN apk add --no-cache nginx && \
    mkdir -p /run/nginx /usr/share/nginx/html

COPY --from=builder /app/artifacts/covertcare-site/dist/public /usr/share/nginx/html
COPY --from=builder /app/artifacts/api-server/dist /app/api/dist
COPY docker/nginx-site-api.conf /etc/nginx/http.d/default.conf
COPY docker/start.sh /start.sh

RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
