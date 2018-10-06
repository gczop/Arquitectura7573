const express = require("express");
var request = require('request');

const app = express();
const PORT = 3000;

app.get("/node/ping", (req,res) => {
	res.send("echo\n");
})

app.get("/node/timeout", (req,res) => {
	setTimeout(function() {
		res.send("Hello There\n");
	}, 3000);
})

app.get("/node/intensive/:n", (req,res) => {
	let n = req.params.n;
    let arr = [0, 1];
  	for (let i = 2; i < n + 1; i++){
    	arr.push(arr[i - 2] + arr[i -1]);
    	for(let x=0; x < n; x++){
    		let y = x ** i;
    	}
  	}
	res.send("We are done\n");
})

app.get("/node/proxy", (req,res) => {
	request.get({
		url: 'http://nginx/gunicorn/timeout',
		},
		function (err, response, body) {
		    if (err) {
		      console.log("error in request", err, response);
		      res.status(400);
			  res.send('Error in request\n');
		    } else {
		      console.log(body);
		      res.send(body);
		    }
		}
	);
})

app.listen(PORT, () => {
	console.log("Listening on ", PORT);
})