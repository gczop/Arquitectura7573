const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
	res.send("Hello There\n");
})

app.get("/timeout", (req,res) => {
	setTimeout(function() {
		res.send("General Kenobi\n");
	}, 3000);
})


app.listen(PORT, () => {
	console.log("Listening on ", PORT);
})
