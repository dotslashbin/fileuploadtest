const express 	= require('express')
const hbs 		= require('hbs')

const formidable 	= require('formidable')
const http 			= require('http')
const util 			= require('util')
const fs 			= require('fs-extra')
const os  			= require('os')

const app 			= express()
const port 			= 3000

const helper 		= require('./helpers/helper.js')

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.render('index.hbs', { title: "jambawamba", foo:"foobar" })
})

app.get('/about', (req, res) => {
	res.render('about.hbs', { title: "jambawamba", foo:"bar"})
})

app.post('/', (req, res) => {

	if (req.url == '/' && req.method.toLowerCase() == 'post') {

		var form = new formidable.IncomingForm();

		form.uploadDir = __dirname + '/uploads/'

		form.parse(req)

		/**
		 * Sample checking on parsed form data
		 */
		// form.parse(req, (error, fields, files) => {
		// 	if(error == null && files.sampleFile.size > 0)
		// 	{
		// 	}
		// })


		// form.on('fileBegin', (name, file) => {
		// 	if(file) {
		// 		file.path = __dirname + '/uploads/' + file.name;	
		// 	}
			
		// })

		form.on('file', (name, file) => {
			if(file.size > 0)
			{
				// form.on('fileBegin', (name, file) => {
				// 	if(file) {
				// 		file.path = __dirname + '/uploads/' + file.name;	
				// 	}
				// })
				// console.log("there is a file --> " + os.tmpdir())
				fs.rename(file.path, __dirname + '/uploads/' + file.name)
				res.send("done")
			} else {
				res.render('index.hbs', { title: "jambawamba", foo:"foobar", 'errorMessage':"No files uploaded..." })
			}


		})

	}

})

app.listen(port, () => {
	console.log("RUNNING ON PORT: " + port)
})

/**
 * Notes
	// res.redirect('/about') -- redirecting

 */