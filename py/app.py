from flask import Flask;
import time


app = Flask(__name__);


@app.route("/")
def root():
	return "Hoola mundo\n";

@app.route("/hola")
def hola():
	return "Looser\n";

@app.route("/timeout")
def timeout():
	time.sleep(10)
	return "Ping"


if __name__ == "__main__":
	app.run();
