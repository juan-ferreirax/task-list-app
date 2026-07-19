#!/bin/sh
set -e

python manage.py collectstatic --noinput
python manage.py migrate
exec gunicorn api.wsgi:application --bind 0.0.0.0:${PORT:-8000}