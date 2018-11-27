const express 		= require('express')
const hbs 			= require('hbs')

const formidable 	= require('formidable')
const http 			= require('http')
const util 			= require('util')
const fs 			= require('fs-extra')
const os  			= require('os')

const app 			= express()
const port 			= 3000

const helper 		= require('./helpers/helper.js')

const uploadFolder 	= __dirname + '/uploads/'

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {

	var files = helper.getListOfFiles(uploadFolder)

	res.render('index.hbs', { title: "jambawamba", foo:"foobar", files_container: "<ol>" + files + "</ol>" })
})

app.get('/about', (req, res) => {
	res.render('about.hbs', { title: "jambawamba", foo:"bar"})
})

app.post('/', (req, res) => {

	if (req.url == '/' && req.method.toLowerCase() == 'post') {

		var form = new formidable.IncomingForm();

		form.uploadDir = uploadFolder

		form.parse(req)

		form.on('file', (name, file) => {
			if(file.size > 0)
			{

				fs.rename(file.path, uploadFolder + file.name)

				fs.readdir(uploadFolder, (error, files) => {
					if(error == null) {
						var fileList = ""; 
						files.forEach( file => {
							if(file != '.DS_Store' )
							{
								fileList += '<li>' + file + '</li>'
							}
							
						})

						res.render('index.hbs', { title: "jambawamba", files_container:"<ol>" + fileList + "</ol>" })
					} else {
						res.render('index.hbs', { title: "jambawamba"})
					}
				});
				
			} else {
				res.render('index.hbs', { title: "jambawamba", foo:"foobar", 'errorMessage':"No files uploaded..." })
			}
		})

	}

})

app.post('/delete', (req, res) => {
	var form = new formidable.IncomingForm();

	form.parse(req, (error, fields, files) => {
		if(error == null) {
			var fileName = fields.file_to_delete

			fs.unlink(uploadFolder + fileName, () => {
				console.log("File deleted...")
			});
		}

		res.render('index.hbs', { title: "jambawamba", foo:"foobar", 'errorMessage':"no files to delete" })

	})
})

app.listen(port, () => {
	console.log("RUNNING ON PORT: " + port)
})