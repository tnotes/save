<template>
	<div>
		<div v-show="origins.length > 0">
			<el-tag  type="primary" :closable="false" effect="dark" size="medium" :disable-transitions="false">Thiết lập Cookie</el-tag>
			<br><br>
			<el-row v-for="(data,index) in origins" :key="index">

				<el-col align="left" :span="6" >

					<el-tag @close="remove_origin(data.origin)" type="info" :closable="true" effect="plain" size="medium" :disable-transitions="false">{{data.origin}}</el-tag>
				</el-col>
				<el-col align="center" :span="2">
					<el-divider direction="vertical"></el-divider>
				</el-col>

				<el-col align="right" :span="16" >
					<el-input placeholder="Cookie rỗng" v-model="data.cookie" size="small" prefix-icon="" suffix-icon="" maxlength="null" clearable type="text" :autosize="false" :disabled="false" autocomplete="off">
						
					</el-input>
					
					
				</el-col>
				<br><br>
			</el-row>
			<el-divider direction="horizontal" ></el-divider>
		</div>
		<el-input v-model="link" type="textarea" :rows="6" :autosize="false" placeholder="Nhập Link,mỗi Link một dòng"></el-input>
		<br><br>
		<center><el-button type="primary" icon="" @click="submit" :loading="loading" :plain="false" :round="false" :circle="false" :autofocus="false" size="small" :disabled="false">Quét</el-button></center>
		<div v-show="table_status.length > 0">
			<el-divider direction="horizontal"></el-divider>
			<el-row>
				<el-col :span="20">
					<el-table :data="table_status" height="500" :border="false" :highlight-current-row="false" :stripe="false" :lazy="false" :show-summary="false" tooltip-effect="light" style="width: 100%">
						<el-table-column type="index" align="left" :sortable="false" :fixed="false" width="60"/>
						<el-table-column label="URL" prop="url" align="left" :sortable="false" :fixed="false" width="300">
							<template slot-scope="scope">
								<el-link :href="scope.row.url" icon="" type="primary" :underline="false" :disabled="false">{{scope.row.url.slice(0,45)+'...'}}</el-link>
							</template>
						</el-table-column>
						<el-table-column label="Trạng thái" align="center" width="180">
							<template slot-scope="scope">
								<el-tag
								:type="scope.row.status === 1 ? 'warning' : 'success'"
								disable-transitions>{{scope.row.status === 1 ? 'Đang quét':'Thành công'}}</el-tag>
							</template>
						</el-table-column>
						<el-table-column label="" align="center" width="180">
							<template slot-scope="scope">
								<el-link target="_blank" :href="'/api/save/view?id='+scope.row.id" icon="el-icon-view" type="primary" :underline="false" :disabled="false">Vỉew</el-link>
							</template>
						</el-table-column>
						<el-table-column label="" align="center" width="180">
							<template slot-scope="scope">
								<el-link target="_blank" :href="'/api/save/download?id='+scope.row.id" icon="el-icon-download" type="primary" :underline="false" :disabled="false">Download</el-link>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-row>
			
		</div>

	</div>
</template>
<script>
	export default {
		data(){
			return{
				
				running:[],
				success:[],
				cookie:'',
				link:'',
				loading:false,
				data_link:[],
				origins:[]
			}
		},
		computed:{
			table_status(){
				return this.running.concat(this.success);
			},
			data(){
				let links = this.link.split('\n').filter(e=>e.includes('http'));
				if(links.length === 0) return [];
				let _ = this;

				return links.map(url=>{
					let {origin} = new URL(url.trim());
					let status = this.success.map(({url})=>url).includes(url) ? 2 : this.running.map(({url})=>url).includes(url) ? 1 : 0;
					return {url,status,origin,cookie:(_.origins.find(e=>e.origin === origin) || {cookie:''}).cookie}
				});
			},

		},
		watch:{
			link:function(){
				let links = this.link.split('\n').filter(e=>e.includes('http'));
				if(links.length === 0) return [];
				let _ = this;
				
				let data = links.map(url=>{
					let {origin} = new URL(url.trim());
					let {cookie} = _.origins.find(e=>e.origin === origin) || {cookie:''};
					return {origin,cookie};
				});
				this.origins = Object.values(data.reduce((acc,cur)=>Object.assign(acc,{[cur.origin]:cur}),{}));
			}
		},
		methods:{
			async submit(){
				if(this.data === 0) return this.$message({message:'Vui lòng nhập ít nhất 1 link',type:'error'});
				this.loading = true;
				for(let {url,cookie} of this.data){
					this.running.push({url,cookie,status:1,id:null});
					let {data} = await this.$axios.post('http://localhost:8080/api/save/add',{url,cookie});
					if(url.includes('facebook.com')){
						let id_post = this.filter_facebook_link(url);
						if(id_post) await this.facebook_post(id_post,cookie);
					}
					
					this.running = this.running.filter(e=>e.url !== url);
					this.success.push(data);
					this.link = this.link.replace(url+'\n','').replace(url,'');
					
				}
				this.loading = false;
				
			},
			async facebook_post(id_post,cookie){
				await this.$axios.post('http://localhost:8080/api/post/info',{id_post,cookie})
			},
			filter_facebook_link(url){
				
				let id_post = null;
				let case_group = url.includes('facebook.com/groups') && url.includes('permalink');
				let case_page = url.includes('facebook.com') && url.includes('/posts/');
				let case_timeline = url.includes('facebook.com/permalink.php?story_fbid=') || url.includes('facebook.com/photo.php?fbid=') || url.includes('facebook.com') && url.includes('/posts/');

				if(case_group) id_post = url.match(/(?<=\/permalink\/+).*?(?=\/)/gs)[0];
				if(case_page) id_post = url.match(/(?<=\/posts\/+).*?(?=\?)/gs)[0];
				return id_post;
			},
			
			remove_origin(origin){
				this.link = this.link.split('\n').filter(e=>!e.includes(origin)).join('\n');
			}
		}
	}
</script>