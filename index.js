const express 	= require('express')
const hbs 		= require('hbs')

const formidable 	= require('formidable')
const http 			= require('http')
const util 			= require('util')
const fs 			= require('fs-extra')

const app 			= express()
const port 			= 3000


app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.render('index.hbs', { title: "jambawamba", foo:"bar"})
})

app.get('/about', (req, res) => {
	res.render('about.hbs', { title: "jambawamba", foo:"bar"})
})

app.post('/upload', (req, res) => {
	if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
	    // parse a file upload
	    var form = new formidable.IncomingForm();

	    form.parse(req, function(err, fields, files) {
	      res.writeHead(200, {'content-type': 'text/plain'});
	      res.write('received upload:\n\n');
	      res.end(util.inspect({fields: fields, files: files}));
	    });

	    return;
	  }
})

app.listen(port, () => {
	console.log("RUNNING ON PORT: " + port)
})