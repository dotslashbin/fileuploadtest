//	Includes
// const bootstrap = require('bootstrap'); 
const express	 	= require('express'); 
const fileUpload 	= require('express-fileupload')
const app 			= express(); 
const port 			= process.env.PORT || 8080; 
const hbs 			= require('hbs'); 

var path 		= __dirname + '/views/'; 

app.use(express.static(__dirname + "/public"));

app.use(fileUpload());

app.use('/', (req, res) => {
	res.render('index.hbs', {
		title: "Joshua's  Test Answer", 
		somevar: "foo bar"
	})
}); 

app.use('/about', (req, res) => {

	console.log("you are here");
})

app.listen(port, () => {
	console.log(`listen to ${port}`)
})