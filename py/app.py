from flask import Flask;
import time


app = Flask(__name__);


@app.route("/gunicorn/")
def root():
	return "Hoola mundo\n";

@app.route("/gunicorn/timeout")
def timeout():
	time.sleep(3)
	return "Ping\n"


if __name__ == "__main__":
	app.run();
