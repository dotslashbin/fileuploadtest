const fs = require('fs'); 

// function loadListOfFiles(path, renderCallback) {
	
// 	fs.readdir(path, (error, files) => {
// 		if(error == null) {

// 			var container = []; 

// 			files.forEach( file => {

// 				if(file != '.DS_Store' )
// 				{
// 					// fileList += '<li>' + file + '</li>'

// 					container.push(file)
// 				}
// 			})

// 		} 

// 		renderCallback(container)
// 	});

// 	return null
// }

var loadListOfFiles = (path, callback) => {
	fs.readdir(path, (error, files) => {
		if(error == null) {
			var container = []; 
			files.forEach( file => {

				if(file != '.DS_Store')
				{
					container.push(file)
				}
			})
		} 

		callback(container)
	});
}

module.exports = {
	loadListOfFiles
}