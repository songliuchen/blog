<template>
	<div class="technologyclass">
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="id" label="编号" width="100">
			</el-table-column>
			<el-table-column prop="caption" label="名称">
				<template scope="scope">
					<div v-if="!scope.row.isedit">
						<el-button @click="showEdit(scope.$index,true)" type="text">{{scope.row.caption}}</el-button>
					</div>
					<div v-else>
						<span>
							<label>名称：</label>
							<el-input size='small' v-model="scope.row.caption" >
						</span>
						<span>
							<label>链接：</label>
							<el-input  size="small" v-model="scope.row.linkhref"></el-input>
						</span>
						<br />
						<div>
							<el-button type="success" size="small" @click="saveEdit(scope.$index)">保存</el-button>
							<el-button type="warning" size="small" @click="showEdit(scope.$index,false)">取消</el-button>
							<el-button type="info" size="small" @click="savaEditOrder(scope.$index)">提升</el-button>
							<el-button type="danger" size="small" @click="deleteEdit(scope.$index)">删除</el-button>
						</div>
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="numposte" label="文章数" width="150">
			</el-table-column>
		</el-table>
		<div class="addedit">
			<div v-if="!showadd">
				<el-button @click="showAdd(true)" type="text">新增</el-button>
			</div>
			<div v-else>
				<span>
					<label>名称：</label>
					<el-input size='small' v-model="caption" >
				</span>
				<span>
					<label>链接：</label>
					<el-input  size="small" v-model="linkhref"></el-input>
				</span>
				<span>
					<el-button type="success" size="small" @click="addEdit()">保存</el-button>
					<el-button type="warning" size="small" @click="showAdd(false)">取消</el-button>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import tszs from '../../assets/js/common.js'
	export default {
		data: function() {
			return {
				tableData: [],
				showadd: false,
				caption:'新建分类',
				linkhref:''
			}
		},
		methods: {
			showEdit(index, isshow) {
				this.tableData[index].isedit = isshow;
			},
			saveEdit(index) {
				var _self = this;
				var _index = index;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/demo/updatedemoclass.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'token':tszs.getCookie("token"),
						'id': this.tableData[index].id,
						'caption': this.tableData[index].caption,
						'linkhref': this.tableData[index].linkhref
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 1) {
							alert('修改成功！');
							_self.tableData[_index].isedit = false;
						} else {
							alert('修改失败！');
						}
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			},
			deleteEdit(index) {
				var _self = this;
				var _index = index;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/demo/deletedemoclass.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'token':tszs.getCookie("token"),
						'id': this.tableData[index].id
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 1) {
							alert('删除成功！');
							_self.tableData.splice(_index, 1);
						} else {
							alert('删除失败！');
						}
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			},
			savaEditOrder(index) {
				var _self = this;
				var _index = index;
				if(index == 0)
					return;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/demo/updatedemoclassorder.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'token':tszs.getCookie("token"),
						'id1': this.tableData[index].id,
						'id2': this.tableData[index - 1].id
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 1) {
							alert('提升成功！');
							var temp = _self.tableData[index - 1];
							_self.tableData[index - 1] = _self.tableData[index];
							_self.tableData[index] = temp;
						} else {
							alert('提升失败！');
						}
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			},
			showAdd(show) {
				this.showadd=show;
			},
			addEdit() {
				var _self = this;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/demo/adddemoclass.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({'token':tszs.getCookie("token"), 
							'caption':this.caption,
							'linkhref':this.linkhref
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 0)
						{
							alert("新增失败!");
							return;
						}
						else
						{
							alert("新增成功!");
							_self.showadd=false;
							loadData(_self);
						}
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			}
		},
		beforeCreate: function() {
			var _self = this;
			loadData(_self);
		}
	}
	
	function loadData(_self)
	{
		$.ajax({
			type: 'POST',
			url: tszs.GetApiRootPath()+'/manage/demo/democlass.do',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify({'token':tszs.getCookie("token")}),
			timeout: 5000,
			success: function(datainfo) {
				if(datainfo === null || datainfo === '') {
					return;
				}
				if(!tszs.IsJsonObject(datainfo))
	        		datainfo = JSON.parse(datainfo);
				if(datainfo['code'] === 0) {
					console.log('服务调用失败！');
					return;
				}
				if(datainfo.data.length === 0) {
					console.log('没有更多数据了！');
					return;
				}
				for(var i = 0; i < datainfo.data.length; i++) {
					datainfo.data[i].isedit = false;
				}
				_self.tableData = datainfo.data;
			},
			error: function() {
				console.log('获取数据失败！');
			}
		})
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.technologyclass span {
		width: 40%;
		margin-right: 2%;
		margin-bottom: 5px;
		display: inline-block
	}
	
	.technologyclass .addedit
	{
		margin-top: 10px;
		margin-left: 50px;
	}
</style>