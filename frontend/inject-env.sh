#!/bin/sh
set -e

: "${API_URL:=http://localhost:8000/api/tasks/}"

sed -i "s|__API_URL__|${API_URL}|g" /usr/share/nginx/html/env.js
