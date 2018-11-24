var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve(' it worked ')
		reject(' it did not work')
	}, 2500);
})

somePromise.then((message) => {
	console.log('Success: ', message)
}, (errorMessage) => {
	console.log('Error: ', errorMessage)
}); 