const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
module.exports = async (id_post,cookie)=>{
	try{
		let options = {
			url:'https://m.facebook.com/'+id_post,
			method:'GET',
			headers:{
				'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.72',
				cookie
			}
		};
		let responseHTML = await request(options);
		
		responseHTML = responseHTML.replace(/\<\!\-\-/g,'').replace(/\-\-\>/g,'');
		let $ = cheerio.load(responseHTML);
		let time = parseInt(responseHTML.match(new RegExp('(?<='+'"__spin_t":'+'+).*?(?='+','+')',"gs"))[0])*1000;
		let user_name = $('strong').eq(0).text();
		let uid = responseHTML.match(new RegExp('(?<='+'"comment_form_'+'+).*?(?='+'_'+')',"gs"))[0];
		let group_name = $('strong').eq(1).text();
		let group_id = responseHTML.match(new RegExp('(?<='+'comment_form_'+'+).*?(?='+'_'+')',"gs"))[0];
		let content = $('div._5rgt').html() ? $('div._5rgt').text() : ((responseHTML.includes('MPhotoUpperContent') && responseHTML.includes('name="description"')) ? $('meta[name="description"]').attr('content') : (responseHTML.includes('class="msg"') ? $('div.msg').find('div').text() : $('div._5rgu').text()));
		
		let image_find = $('img.scaledImageFitWidth').attr('src');
		let image = [image_find];

		
        let like_num = parseInt(responseHTML.match(new RegExp('(?<='+'reactioncount:'+'+).*?(?='+','+')',"gs"))[0]);
		
	    let share_num = parseInt(responseHTML.match(new RegExp('(?<='+'share_count:'+'+).*?(?='+','+')',"gs"))[0]);


		let comment_num = parseInt(responseHTML.match(new RegExp('(?<='+'comment_count:'+'+).*?(?='+','+')',"gs"))[0]);
		return {time,user_name,uid,group_name,group_id,content,image,like_num,comment_num,share_num}
	}catch(e){
		console.log(e);
		
		return {};
	}
};
