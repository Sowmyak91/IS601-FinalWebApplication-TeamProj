FROM python:3.8

EXPOSE 8000

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt --upgrade pip
RUN pip install flask-mysql

COPY app.py /app

CMD python app.py

