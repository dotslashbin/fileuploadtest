//	Includes
// const bootstrap = require('bootstrap'); 
const express 	= require('express'); 
const app 		= express(); 
const port 		= 8080; 
const router 	= express.Router(); 
const fetch 	= require('node-fetch'); 
const hbs 		= require('hbs')

var path 		= __dirname + '/views/'; 

app.use(express.static(__dirname + "/public"));

app.use('/', (req, res) => {
	res.render('index.hbs', {
		title: "Joshua's Test Answer", 
		somevar: "foo bar"
	})
}); 

app.use('/tests', router); 

router.get('/', (req, res) => {
	res.sendFile(path + 'index.html')
})

router.post('/tests', (req, res) => {
	console.log(req.body)
})


app.listen(port, () => {
	console.log('listen to ' + port)
})

