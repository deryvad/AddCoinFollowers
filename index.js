var querystring = require('querystring');
var request = require('request');
let counter = 0;
const vote = () => {
    var form = {
        coin: '8ad82049fc3158b52d5567538e4d9532aaWyI3cdAzGoPMmNPbrQAAbmerbmer'
    };
    
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    
    request({
        headers: {
          'Content-Length': contentLength,
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'PostmanRuntime/7.29.0',
          'Accept': '*/*',
          'Postman-Token': 'b0f792d8-13d4-4125-8bdf-ab062b3a5e6c',
          'Host': 'coindiscovery.app',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': 67,
          'Cookie': 'codi_sess=6g4ij1tr6t6juk4jk2gj8g4nrohsig11a'
        },
        uri: 'https://coindiscovery.app/user/vote',
        body: formData,
        method: 'POST'
      }, function (err, res, body) {
        //it works!
         console.log(body)
        //  if(body.indexOf("success")> -1){}
        
        setTimeout(()=>{           
            vote();
        }, 1000);
      });
      
}

for(let i = 1; i--;) {
    vote();
}




