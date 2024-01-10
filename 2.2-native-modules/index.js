const fs = require("fs");

fs.writeFile("newMessage.txt", "This is Orhun!", (err) => {
	if (err) throw err;
	console.log("File has been saved");
});

fs.readFile("message.txt", 'utf8', function(err, data){
    if (err) throw err;
    // Display the file content
    console.log(data);
});