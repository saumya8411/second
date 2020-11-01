

const sendWelcomeEmail = (email, name) => {
 var options = {
  "method": "POST",
  "hostname": "api.transmail.com",
  "port": null,
  "path": "/v1.1/email",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "api_key",
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

req.write(JSON.stringify({ bounce_address: 'bounce_address@domain.com',
  from: { address: 'senders_mail@domain.com', name: 'TestMail' },
  to: 
   [ { email_address: 
        { address: 'receiver_mail@domain.com',
          name: 'karthikeyan' } } ],
  subject: 'Welcome!!!!!!',
  htmlbody: `nice to have you here ${name}` }));
req.end();
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
    "authorization": "api_key",
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

req.write(JSON.stringify({ bounce_address: 'bounce_address@domain.com',
  from: { address: 'senders_mail@domain.com', name: 'TestMail' },
  to: 
   [ { email_address: 
        { address: 'receiver_mail@domain.com',
          name: 'karthikeyan' } } ],
  subject: 'goodbye',
  htmlbody: `hope, to see you soon!!!! ${name}` }));
req.end();
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}





