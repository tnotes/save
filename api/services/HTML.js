const request = require('request-promise');
module.exports = async (url,cookie = '')=>{
	let options = {
		url,
		method:'GET',
		headers:{
		    'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.72',
		    cookie
		}
	};
	let responseHTML = await request(options);
	return responseHTML
};