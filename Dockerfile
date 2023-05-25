FROM python:3.9.16-slim-bullseye
MAINTAINER "carmelo.califano@gmail.com"

WORKDIR /srv
COPY main.py requirements.txt /srv/
RUN pip3 install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]

