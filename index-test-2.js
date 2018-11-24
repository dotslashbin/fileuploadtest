const port 		= 3000; 
const express 	= require('express'); 
var app 		= express(); 

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
	res.send({
		name: "joshua", 
		likes: ["crossfit", "food"]
	}); 
})

app.get('/about', (req, res) => {
	res.send("About page")
})

app.listen(port, () => {
	console.log("It is running on port " + port)
})  