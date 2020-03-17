const request = require('request-promise');
const download = require('download');
const fs = require('fs');
let check_link = link=>link.includes('http://') || link.includes('https://') || link.slice(0,2) === '//';
let replace_link = (old_link,new_link,responseHTML)=>{
	if(responseHTML.includes('"'+old_link+'"')) responseHTML = responseHTML.replace('"'+old_link+'"','"'+new_link+'"');
	if(responseHTML.includes('"'+old_link+'"')) {
		return replace_link(old_link,new_link,responseHTML);
	}else{
		return responseHTML;
	}
};
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
	let {hostname,origin} = new URL(url);
	let javascript = responseHTML.match(new RegExp('(?<='+'src="'+'+).*?(?='+'"'+')',"gs")).filter(e=>e.includes('.js')).map(link=>{
		let last_section = link.split('/').pop();
		let name = last_section.includes('?') ? last_section.slice(0,last_section.indexOf('?')) : last_section;
		responseHTML = replace_link(link,'/'+hostname+'/'+name,responseHTML);
		link = check_link(link) ? link : (link[0] === '/' ? origin+link : options.url+link);
		return {name,link}
	});
	let jpg = responseHTML.match(new RegExp('(?<='+'src="'+'+).*?(?='+'"'+')',"gs")).filter(e=>e.includes('.jpg')).map(link=>{
		let last_section = link.split('/').pop();
		let name = last_section.includes('?') ? last_section.slice(0,last_section.indexOf('?')) : last_section;
		responseHTML = replace_link(link,'/'+hostname+'/'+name,responseHTML);
		link = check_link(link) ? link : (link[0] === '/' ? origin+link : options.url+link);
		link = decodeURIComponent(link).replace(/amp\;/g,'');
		
		return {name,link}
	});
	let png = responseHTML.match(new RegExp('(?<='+'src="'+'+).*?(?='+'"'+')',"gs")).filter(e=>e.includes('.png')).map(link=>{
		let last_section = link.split('/').pop();
		let name = last_section.includes('?') ? last_section.slice(0,last_section.indexOf('?')) : last_section;
		responseHTML = replace_link(link,'/'+hostname+'/'+name,responseHTML);
		link = check_link(link) ? link : (link[0] === '/' ? origin+link : options.url+link);
		link = decodeURIComponent(link).replace(/amp\;/g,'');

		return {name,link}
	});
	let css = responseHTML.match(new RegExp('(?<='+'href="'+'+).*?(?='+'"'+')',"gs")).filter(e=>e.includes('.css')).map(link=>{
		let last_section = link.split('/').pop();
		let name = last_section.includes('?') ? last_section.slice(0,last_section.indexOf('?')) : last_section;
		responseHTML = replace_link(link,'/'+hostname+'/'+name,responseHTML);
		link = check_link(link) ? link : (link[0] === '/' ? origin+link : options.url+link);
		return {name,link}
	});
	
	let links = [...javascript,...jpg,...png,...css];
	if (!fs.existsSync('./client/static/'+hostname)) fs.mkdirSync('./client/static/'+hostname);
	for(let {name,link} of links){
		let find_link = await Assets.findOne({name,hostname});
		if(!find_link) {
			try{
				await download(link,'./client/static/'+hostname);
				await Assets.create({name,hostname})

			}catch(e){

			}
		}
	};
	return responseHTML;
	
};