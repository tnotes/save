<template>
	<div>
		<el-row>
			<el-col :span="12" :offset="0">
				<small>Range time : </small>
				<el-date-picker
				@change = "change_range_time"
				size="mini"
				v-model="range_time"
				type="datetimerange"
				start-placeholder="Bắt Đầu"
				end-placeholder="Kết Thúc"
				:default-time="['00:00:00','23:59:59']">
			</el-date-picker>
		</el-col>
		<el-col align="right" :span="12">

			<el-col :span="7" :offset="2">

				<el-dropdown style="float:right;margin-right:10px" @command="select_origin" placement="bottom-end" size="mini" trigger="click" :split-button="true" :hide-on-click="false">
					<span>
						{{origin}}
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for="(data,index) in (origins.length > 0 ? origins.filter(({origin})=>origin !== 'all') : [])" :key="index"  icon="" :command="data.origin" :divided="false" :disabled="false">{{data.origin}}</el-dropdown-item>
						<el-dropdown-item align="center" command="Phân Loại" :divided="false" :disabled="false">All</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>	
			</el-col>
			<el-col :span="13">
				<el-input @keyup.enter.native="refresh" placeholder="Nhập nội dung tìm kiếm" v-model="search" size="mini" clearable type="text" :autosize="false" :disabled="false" autocomplete="off">
					<el-button slot="append" type="primary" icon="el-icon-search" :loading="false" @click="refresh" :plain="false" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Search</el-button>
				</el-input>
			</el-col>
		</el-col>
	</el-row>
	<el-divider direction="horizontal"></el-divider>
	<el-row>
		<el-col :span="24" :offset="0">
			<el-table :data="list_link" height="500" :border="false" :highlight-current-row="false" :stripe="false" :lazy="false" :show-summary="false" tooltip-effect="light" style="width: 100%">
				<el-table-column label="Thời gian" align="left" :sortable="false" :fixed="false" width="180">
					<template slot-scope="scope">
						{{timeConverter(scope.row.createdAt)}}
					</template>
				</el-table-column>
				<el-table-column label="URL" prop="url" align="left" :sortable="false" :fixed="false" width="360">
					<template slot-scope="scope">
						<el-link target="_blank" :href="scope.row.url" icon="" type="primary" :underline="true" :disabled="false">{{scope.row.url.slice(0,45) + '...'}}</el-link>
					</template>
				</el-table-column>
				<el-table-column label="Origin" prop="origin" align="left" :sortable="false" :fixed="false" width="180"/>
				<el-table-column  label="Xem" prop="origin" align="center" :sortable="false" :fixed="false" width="120">
					<template  slot-scope="scope">
						<el-link target="_blank" :href="'/api/save/view?id='+scope.row.id" icon="el-icon-view" type="primary" :underline="true" :disabled="false"></el-link>
					</template>
				</el-table-column>
				<el-table-column  label="Download" prop="origin" align="center" :sortable="false" :fixed="false" width="120">
					<template  slot-scope="scope">
						<el-link target="_blank" :href="'/api/save/download?id='+scope.row.id" icon="el-icon-download" type="primary" :underline="true" :disabled="false"></el-link>
					</template>
				</el-table-column>
				<el-table-column  label="" prop="origin" align="center" :sortable="false" :fixed="false" width="120">
					<template  slot-scope="scope">
						<el-popconfirm title="Bạn có chắc chắn?" @onConfirm="remove(scope.row)" confirmButtonText='OK' cancelButtonText='Không,cảm ơn.' icon="el-icon-info" iconColor="red">
							<el-button type="danger"icon="el-icon-delete-solid" slot="reference" :loading="false" :plain="false" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false"></el-button>
						</el-popconfirm>
					</template>
				</el-table-column>
			</el-table>
		</el-col>
	</el-row>
	<br>
	<el-row>
		<el-col :span="24" :offset="0">

			<el-pagination @current-change="move_tag" :total="pagination" :pager-count="9" :hide-on-single-page="true" background layout="prev, pager, next"></el-pagination>

		</el-col>
	</el-row>
</div>
</template>
<script>
	export default {
		data(){
			return {
				list_link:[],
				origins:[],
				origin:'Phân Loại',
				search:'',
				page:1,
				range_time:'',
				start:0,
				end:0
			}
		},
		created:async function(){
			await this.refresh();
		},
		computed:{
			pagination(){
				return (this.origins.find(({origin})=>origin === 'all') || {num:0}).num;
			},
			condition(){
				let condition = {};

				if(this.origin !== 'Phân Loại') condition.origin = {contains:this.origin};
				if(this.search.length > 0) condition.html = {contains:this.search};
				if(this.start && this.end) condition.createdAt = {'>':this.start,'<':this.end};

				return condition;
			}
		},
		methods:{
			async refresh(){
				await Promise.all[this.load_data(),this.count()];
			},
			customize_origin(origin){
				origin = origin.replace('https://','').replace('http','').replace('www.','');
				return origin.length > 25 ? origin.slice(0,25)+'...' : origin;
			},
			async load_data(){
				let {data} = await this.$axios.get('http://103.226.249.122:8080/api/save?limit=8&select=origin,url,createdAt&skip='+(8*(this.page - 1 )),{params:{where:this.condition}});
				this.list_link = data;
			},
			async count(){
				let {data} = await this.$axios.get('http://103.226.249.122:8080/api/save/count',{params:{condition:JSON.stringify(this.condition)}});
				this.origins = data;
				
			},
			async move_tag(index){
				this.page = index;
				await this.refresh();
			},
			async remove(row){
				let {data} = await this.$axios.delete('http://103.226.249.122:8080/api/save/'+row.id);
				this.list_link = this.list_link.filter(e=>e.id !== data.id);
				this.$message({message:'Đã xóa '+row.url.slice(0,40)+' ...',type:'warning'})
			},
			async select_origin(origin){
				this.origin = this.customize_origin(origin);
				await this.refresh();
			},
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
			async change_range_time(time){

				if(!time){
					 this.start = 0 , this.end = 0;
				}else{
					let date_time_start = new Date(time[0]);
					this.start = date_time_start.getTime();

					let date_time_end = new Date(time[1]);
					this.end = date_time_end.getTime();

				}
				return await this.refresh();

			}
		}
	}
</script>
<style scoped>

</style>