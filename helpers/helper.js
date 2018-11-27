const fs = require('fs'); 

var getListOfFiles = (path) => {

	return fs.readdir(path, (error, files) => {
		if(error == null) {
			var fileList = ""; 
			files.forEach( file => {
				if(file != '.DS_Store' )
				{
					fileList += '<li>' + file + '</li>'
				}
			})

		} 
	});
}

module.exports = {
	getListOfFiles
}