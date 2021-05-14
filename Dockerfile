FROM node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD "npm" "start"

FROM python:3.8

EXPOSE 5000

WORKDIR /app

COPY requirements.txt /app
COPY templates /app/templates

RUN pip install -r requirements.txt --upgrade pip
RUN pip install flask-mysql

COPY . /app