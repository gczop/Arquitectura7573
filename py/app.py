from flask import Flask;
import time


app = Flask(__name__);


@app.route("/gunicorn/ping")
def root():
	return "echo\n";

@app.route("/gunicorn/timeout")
def timeout():
	time.sleep(3)
	return "Hello There\n"


if __name__ == "__main__":
	app.run();
