fs = require("fs")
const startTime = new Date()
if(!fs.existsSync("logs")){
    fs.mkdirSync("logs", 0766, function(err){
        if(err){
            console.log(err);
            // echo the result back
            response.send("ERROR! Can't make the directory! \n");
        }
    });
}

exports.log = function(input){
	try{
		var fileDate = (startTime.getFullYear() + "-" + (startTime.getMonth() + 1) + "-" + startTime.getDate() + "-" + startTime.getHours() + ";" + startTime.getMinutes() + ";" + startTime.getSeconds() + ";" + startTime.getMilliseconds())
		var fileName = ("logs/" + fileDate + ".log")
		var commandDate = new Date()
		var commandTime = (commandDate.getFullYear() + "-" + (commandDate.getMonth() + 1) + "-" + commandDate.getDate() + "-" + commandDate.getHours() + ";" + commandDate.getMinutes() + ";" + commandDate.getSeconds() + ";"  + commandDate.getMilliseconds() + ":" + " ")
		var fileoutputstring = ("\n" + commandTime + input)
		var consoleoutputstring = (commandTime + input)
		fs.appendFile(fileName, fileoutputstring, function (error) {
			if (error) throw error;
		});
		console.log(consoleoutputstring)
		}
	catch(error){
		console.log("JSFILELOGGER ERROR")
		console.log(error)
	}
}