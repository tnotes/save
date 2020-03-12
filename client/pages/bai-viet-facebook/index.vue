<template>
	<div>
		<el-row>
			<el-col :span="10" :offset="0">
				<small>Range time : </small>
				<el-date-picker @change="set_range_time" v-model="range_time" size="mini" type="datetimerange" align="left" start-placeholder="Bắt Đầu" end-placeholder="Kết Thúc":default-time="['00:00:00', '23:59:59']"></el-date-picker>
			</el-col>
			<el-col style="float:right;" :span="6" :offset="0">
				<el-input placeholder="Cookie" suffix-icon="el-icon-user-solid" v-model="cookie" size="mini"  clearable type="text" :autosize="false" :disabled="false" autocomplete="off">

				</el-input>
			</el-col>
		</el-row>
		<el-divider direction="horizontal"></el-divider>
		<el-row>
			<el-col :span="24" :offset="0">
				<el-table :data="posts" height="500" :border="false" :highlight-current-row="false" :stripe="false" :lazy="false" :show-summary="false" tooltip-effect="light" style="width: 100%">
					<el-table-column label="Time" align="left" :sortable="false" :fixed="false" width="180">
						<template slot-scope="scope">
							{{timeConverter(scope.row.time)}}
						</template>
					</el-table-column>
					<el-table-column label="Username" align="left" :sortable="false" :fixed="false" width="120">
						<template slot-scope="scope">
							<el-tooltip :content="'UID: '+scope.row.uid" effect="dark" placement="top">
								<el-link target="_blank" :href="'https://www.facebook.com/'+scope.row.uid" type="primary" :underline="true" :disabled="false">
									{{scope.row.user_name}}
								</el-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Group Name" align="left" :sortable="false" :fixed="false" width="240">
						<template slot-scope="scope">
							<el-tooltip :content="'ID Group: '+scope.row.group_id" effect="dark" placement="top">
								<el-link target="_blank" :href="'https://www.facebook.com/'+scope.row.group_id" type="primary" :underline="true" :disabled="false">
									{{scope.row.group_name}}
								</el-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Content" align="left" :sortable="false" :fixed="false" width="260">
						<template slot-scope="scope">
							<el-tooltip :content="'ID Post: '+scope.row.id_post" effect="dark" placement="top">
								<el-link target="_blank" :href="'http://localhost:8080/api/save/view?id_post='+scope.row.id_post" type="primary" :underline="true" :disabled="false">
									{{scope.row.content.length > 120 ? scope.row.content.slice(0,120)+'...' : scope.row.content}}
								</el-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column align="center" label="Like" :sortable="false" :fixed="false" width="90">
						<template slot-scope="scope">

							<el-popover  width="50" :disabled="!scope.row.like_visible" placement="top-start">
								<div v-loading="loading"
								element-loading-text="Loading..."
								element-loading-spinner="el-icon-loading"
								style="height: 100px;overflow-y: scroll;">
								<template v-for="data of persons" >
									<el-link target="_blank" :href="'https://www.facebook.com/'+data.uid" size="mini" icon="" type="danger" :underline="false" :disabled="false">{{data.name}}</el-link> <br>
								</template>
							</div>
							<el-button @click="UID_Like(scope.row)" slot="reference" type="danger" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">{{scope.row.like_num}}</el-button>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column align="center" label="Comment" :sortable="false" :fixed="false" width="90">
					<template slot-scope="scope">
						<el-popover placement="top-start" :disabled="!scope.row.comment_visible" trigger="click" title="Comment"  width="90" transition="el-fade-in-linear">
							<div v-loading="loading"
							element-loading-text="Loading..."
							element-loading-spinner="el-icon-loading"
							style="height: 100px;overflow-y: scroll;">
							<template v-for="data of persons" >
								<el-link target="_blank" :href="'https://www.facebook.com/'+data.uid" size="mini" icon="" type="warning" :underline="false" :disabled="false">{{data.name}}</el-link> <br>
							</template>
						</div>
						<el-button @click="UID_Comment(scope.row)" slot="reference" type="warning" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">{{scope.row.comment_num}}</el-button>
					</el-popover>

				</template>
			</el-table-column>
			<el-table-column align="center" label="Share" prop="share_num" :sortable="false" :fixed="false" width="90">
				<template slot-scope="scope">
					<el-popover placement="top-start" :disabled="!scope.row.share_visible" trigger="click" title="Title" content="this is content, this is content, this is content" width="90" transition="el-fade-in-linear">

						<el-button @click="UID_Share(scope.row)" slot="reference" type="info" effect="plain" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">{{scope.row.share_num}}</el-button>
					</el-popover>
				</template>
			</el-table-column>

			<el-table-column align="center" label="Cập nhật" :sortable="false" :fixed="false" width="90">
				<template slot-scope="scope">
					<el-tooltip content="Reload" effect="dark" placement="top">
						<el-popconfirm title="Bạn có chắc chắn cập nhật,dữ liệu cũ sẽ bị thay thế?" @onConfirm="update" confirmButtonText='OK' cancelButtonText='Không,cảm ơn.' icon="el-icon-info" iconColor="red">
							<el-button  slot="reference" type="success" icon="el-icon-refresh-left" :loading="false" :plain="true" :round="false" :circle="true" :autofocus="false" size="mini" :disabled="false"></el-button>

						</el-popconfirm>

					</el-tooltip>
					<el-tooltip content="Delete" effect="dark" placement="top">
						<el-popconfirm title="Bạn có chắc chắn?" @onConfirm="remove_post(scope.row)" confirmButtonText='OK' cancelButtonText='Không,cảm ơn.' icon="el-icon-info" iconColor="red">
							<el-button slot="reference" type="danger" icon="el-icon-delete-solid" :loading="false" :plain="true" :round="false" :circle="true" :autofocus="false" size="mini" :disabled="false"></el-button>
						</el-popconfirm>

					</el-tooltip>

				</template>
			</el-table-column>

		</el-table>
	</el-col>
</el-row>
</div>
</template>
<script>
	export default {
		data(){
			return {
				posts:[],
				cookie:'',
				persons:[],
				demo_variable:false,
				range_time:'',
				start:0,
				end:0,
				loading:false
			}
		},
		created:async function(){
			await this.refresh();
		},
		methods:{
			timeConverter(UNIX_timestamp){
				var a = new Date(UNIX_timestamp);

				var year = a.getFullYear();
				var month = a.getMonth();
				var date = a.getDate();
				var hour = a.getHours();
				var min = a.getMinutes();
				var sec = a.getSeconds();
				var time = date + ' / ' + month + ' / ' + year + ' ' + hour + ':' + min + ':' + sec ;
				return time;
			},
			async remove_post(data){
				await this.$axios.delete('http://localhost:8080/api/post/'+data.id);
				this.posts = this.posts.filter(e=>e.id !== data.id);

			},
			
			async UID_Like(row){
				if(!this.cookie.includes('c_user')) {
					return this.$message({message:'Bạn vui lòng nhập Cookie',type:'error'});
				};
				this.persons = [];
				this.loading = true;
				row.like_visible = true;
				let {data} = await this.$axios.post('http://localhost:8080/api/post/get-uid-like',{id_post:row.id_post,cookie:this.cookie});
				this.loading = false;
				this.persons = data;

			},
			async UID_Comment(row){
				if(!this.cookie.includes('c_user')) {
					return this.$message({message:'Bạn vui lòng nhập Cookie',type:'error'});
				};
				this.persons = [];
				this.loading = true;
				row.comment_visible = true;
				let {data} = await this.$axios.post('http://localhost:8080/api/post/get-uid-comment',{id_post:row.id_post,cookie:this.cookie});
				this.loading = false;
				this.persons = data;
			},
			async UID_Share(row){
				this.$message({message:'Chức năng hiển thị người Share hiện không khả dụng.',type:'primary'})
			},
			async refresh(){
				let where = {};
				if(this.start && this.end) where.time = {'>':this.start,'<':this.end};
				let {data} = await this.$axios.get('http://localhost:8080/api/post',{params:{where}});
				data = data.map(e=>{
					e.like_visible = false;
					e.comment_visible = false;
					e.share_visible = false;
					return e;
				});
				return this.posts = data;
			},
			async update(){

			},
			async set_range_time(){
				let start_date = new Date(this.range_time[0]);
				this.start = start_date.getTime();
				let end_date = new Date(this.range_time[1]);
				this.end = end_date.getTime();
				await this.refresh();
			}
		}

	}
</script>
<style scoped>

</style>