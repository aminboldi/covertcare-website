#!/bin/sh
set -e

node /app/api/dist/index.mjs &
exec nginx -g "daemon off;"
