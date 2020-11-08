const http = require('https');


const sendWelcomeEmail = (email, name) => {
  var options = {
  "method": "POST",
  "hostname": "api.transmail.com",
  "port": null,
  "path": "/v1.1/email",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": `Zoho-enczapikey ${process.env.API_TRANSMAIL}`,
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
               
  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});
console.log('==================================================');
console.log(email,name);

req.write(JSON.stringify({ bounce_address: process.env.BOUNCE_MAIL,
  from: { address: process.env.SENDERS_MAIL, name: 'TestMail' },
  to: 
   [ { email_address: 
        { address: email,
          name: name } } ],
  subject: 'Welcome!!!!!!',
  htmlbody: `nice to have you here ${name}` }));
req.end();
console.log("==============================================>");
}

const sendCancelationEmail = (email, name) => {
    var options = {
  "method": "POST",
  "hostname": "api.transmail.com",
  "port": null,
  "path": "/v1.1/email",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": process.env.API_TRANSMAIL
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
               
  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ bounce_address: process.env.BOUNCE_MAIL,
  from: { address: process.env.SENDERS_MAIL, name: 'TestMail' },
  to: 
   [ { email_address: 
        { address: email,
          name: name } } ],
  subject: 'goodbye',
  htmlbody: `hope, to see you soon!!!! ${name}` }));
req.end();
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}





