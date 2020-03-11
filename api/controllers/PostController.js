/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	'info':async function(req,res){
		let {id_post,cookie} = req.body;
		let data = await FB_Post(id_post,cookie);
		let find_post = await Post.findOne({id_post});
		if(find_post) await Post.destroy({id_post});
		data.id_post = id_post;
		data.url = 'https://www.facebook.com/'+id_post;
		let create_data = await Post.create(data).fetch();
		return res.send(create_data)
	},
	'get-uid-like':async function(req,res){
		console.log(req.body);
 		let {id_post,cookie} = req.body;
 		let data = await UID_Like(id_post,cookie);
 		return res.send(data);
 	},
 	'get-uid-comment':async function(req,res){
 		let {id_post,cookie} = req.body;
 		let data = await UID_Comment(id_post,cookie);
 		return res.send(data);
 	}
};

