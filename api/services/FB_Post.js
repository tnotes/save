const request = require('request-promise');
const cheerio = require('cheerio');
module.exports = async (id_post,cookie)=>{
	try{
		let options = {
			url:'https://www.facebook.com/'+id_post,
			method:'GET',
			headers:{
				'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.72',
				cookie
			}
		};
		let responseHTML = await request(options);
		responseHTML = responseHTML.replace(/\<\!\-\-/g,'').replace(/\-\-\>/g,'');
		let $ = cheerio.load(responseHTML);
		let time = parseInt(responseHTML.match(/(?<=\"serverTime\"\:+).*?(?=\})/gs)[0]);
		let user_name = $('div.userContentWrapper').find('a[rel="dialog"]').attr('title');
		let uid = responseHTML.match(/(?<=outer\_story\_actor\_id\:+).*?(?=\,)/gs)[0];
		let group_name = $('title#pageTitle').text();
		let group_id = responseHTML.match(/(?<=group\_id\=+).*?(?=\&)/gs)[0];
		let content = $('div[data-testid="post_message"]').text();
		let image_find = $('img.scaledImageFitWidth').attr('src');
		let image = [image_find];
		let like_num = parseInt(responseHTML.match(/(?<=reaction\_count\:\{count\:+).*?(?=\})/gs)[0]);
		let share_num = parseInt(responseHTML.match(/(?<=share\_count\:\{count\:+).*?(?=\})/gs)[0]);
		let comment_num = parseInt(responseHTML.match(/(?<=comment\_count\:\{total\_count\:+).*?(?=\})/gs)[0]);
		return {time,user_name,uid,group_name,group_id,content,image,like_num,comment_num,share_num}
	}catch(e){
		return {};
	}
};
