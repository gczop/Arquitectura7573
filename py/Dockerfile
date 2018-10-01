FROM python:2

RUN mkdir /usr/app

WORKDIR /usr/app

# Copiar al archivo al working dir
COPY app.py .

RUN pip install flask gunicorn

ENTRYPOINT [ "gunicorn", "-w", "1", "app:app", "-b", "0.0.0.0:8000" ]