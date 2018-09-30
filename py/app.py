from flask import Flask;


app = Flask(__name__);


@app.route("/")
def root():
	return "Hoola mundo\n";

@app.route("/hola")
def hola():
	return "Looser\n";


if __name__ == "__main__":
	app.run();