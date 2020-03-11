/**
 * SaveController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
 	add:async function(req,res){
 		let {url,cookie} = req.body;
 		url = url.includes('?') ? url.slice(0,url.indexOf('?')) : url;
 		let {origin} = new URL(url);
 		let html = await HTML(url,cookie);
 		let find_url = await Save.find({url});
 		if(find_url.length > 0) await Save.destroy({url});
 		let result = await Save.create({origin,url,html}).fetch();
 		return res.send(result);
 	},
 	view:async function(req,res){
 		let {id,id_post} = req.query;
 		console.log(id_post);
 		let find_view = id ? await Save.findOne({id}) : (id_post ? await Save.findOne({url:{'contains':id_post}}) : null);
 		if(!find_view) return res.sendStatus(404);
 		let {url,origin,html} = find_view;
 		if(!url.includes('facebook.com')){
 			(html.match(/(?<=href\=\"+).*?(?=\")/gs) || []).map(e=>{
 				if((e.slice(0,2) === '//') || e.includes('http')) {
 					return e
 				}
 				else if(e.slice(0,1) === '/') {

 					html = html.replace(e,origin+e);
 				}else{
 					html =html.replace(e,url+'/'+e);
 				};
 				return e;
 			});
 			(html.match(/(?<=src\=\"+).*?(?=\")/gs) || []).map(e=>{
 				if((e.slice(0,2) === '//') || e.includes('http')) {
 					return e
 				}
 				else if(e.slice(0,1) === '/') {

 					html = html.replace(e,origin+e);
 				}else{
 					html =html.replace(e,url+'/'+e);
 				};
 				return e;
 			});
 		}
 		return res.send(html);
 	},
 	download:async function(req,res){
 		let {id} = req.query;
 		let {url,origin,html} = await Save.findOne({id});
 		if(!url.includes('facebook.com')){
 			(html.match(/(?<=href\=\"+).*?(?=\")/gs) || []).map(e=>{
 				if((e.slice(0,2) === '//') || e.includes('http')) {
 					return e
 				}
 				else if(e.slice(0,1) === '/') {

 					html = html.replace(e,origin+e);
 				}else{
 					html =html.replace(e,url+'/'+e);
 				};
 				return e;
 			});
 			(html.match(/(?<=src\=\"+).*?(?=\")/gs) || []).map(e=>{
 				if((e.slice(0,2) === '//') || e.includes('http')) {
 					return e
 				}
 				else if(e.slice(0,1) === '/') {

 					html = html.replace(e,origin+e);
 				}else{
 					html =html.replace(e,url+'/'+e);
 				};
 				return e;
 			});
 		}
 		res.setHeader('Content-disposition', 'attachment; filename='+origin+'-'+Math.floor(Math.random() * 100000000)+'.html');
 		res.setHeader('Content-type', 'text/plain');
 		res.charset = 'UTF-8';
 		res.write(html);
 		res.end();
 	},
 	count:async function(req,res){
 		let condition = JSON.parse(req.query.condition);
 		let save = await Save.count(condition);
 		let origins = await Save.find().select(['origin']);
 		origins = [...new Set(origins.map(({origin})=>origin))];
 		let count_origin_map = origins.map(async origin=>{
 			let num = await Save.count({origin});
 			return {origin,num}
 		})
 		let count_origin = await Promise.all(count_origin_map);
 		count_origin.push({num:save,origin:'all'})
 		return res.send(count_origin);
 	}
 };

