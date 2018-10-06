const express = require("express");

const app = express();
const PORT = 3000;

app.get("/node/", (req,res) => {
	res.send("Hello There\n");
})

app.get("/node/timeout", (req,res) => {
	setTimeout(function() {
		res.send("General Kenobi\n");
	}, 1000);
})


app.listen(PORT, () => {
	console.log("Listening on ", PORT);
})