FROM python:3.11.2

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

# ENV DATABASE_URL="postgres://fablab_ppr1_user:wLpxQJ5IK3cMu12eAr8h7rSDoiM1N3Pl@dpg-chuuto7dvk4oliu3iud0-a.singapore-postgres.render.com/fablab_ppr1"

EXPOSE 8000

CMD ["python", "manage.py", "runserver"]