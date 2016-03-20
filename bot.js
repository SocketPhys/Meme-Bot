var login = require("facebook-chat-api");
var fs = require('fs');
const exec = require('child_process').exec;
// Create simple echo bot 
var caption = require('caption')


login({email: "titrateacids@gmail.com", password: "Boombox@asd123"}, function callback (err, api) {
    if(err) return console.error(err);
		
       api.listen(function callback(err, message) {
			var mes = message.body;
			console.log(mes);
			mes=mes.match(/\w+|"[^"]+"/g);
			
			
			for( i=0;i<mes.length;i++){
				mes[i]=mes[i].substring(1,mes[i].length-1);
			}
			mes1 = mes[0];
			mes2= mes[1];
			mes3 = mes[2];
			
			try{
			caption.url(mes1,{
				caption : mes2,
				bottomCaption : mes3,
				outputFile : "cat.jpg"
			},function(err,filename){
				var msg = {
                	attachment: fs.createReadStream("cat.jpg")
				}
				api.sendMessage( msg,message.threadID,function(){
                                                                                                                                                                                                                                                                                                                                                                                                                      	                                                                                            
				});         
			})
			}catch(error){};
			
		
	           
		
		   
			
	});
});

