var request = require("request");

/* 

  Get your SMSLink / SMS Gateway Connection ID and Password from 
  https://www.smslink.ro/get-api-key/
  
*/

var options = {
  method: 'GET',
  url: 'https://secure.smslink.ro/sms/gateway/communicate/index.php',
  qs: {
    to: '07xyzzzzzz',
    message: 'My Test Message',
    connection_id: '... My SMS Gateway Connection ID ...',
    password: '... My SMS Gateway Password ...'
  },
  headers: {
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});