FROM python:latest
WORKDIR /home/app

COPY Requirements.txt .

RUN python3 -m pip install -r Requirements.txt --no-cache-dir

CMD ["python", "-m", "flask", "run", "--host", "0.0.0.0"]