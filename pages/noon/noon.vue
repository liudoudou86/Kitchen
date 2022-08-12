<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="60" align="center">时间</uni-th>
					<uni-th width="100" align="center">主菜①</uni-th>
					<uni-th width="100" align="center">主菜②</uni-th>
					<uni-th width="100" align="center">主菜③</uni-th>
					<uni-th width="100" align="center">主菜④</uni-th>
					<uni-th width="100" align="center">主菜⑤</uni-th>
					<uni-th width="100" align="center">汤</uni-th>
					<uni-th width="100" align="center">水果</uni-th>
					<uni-th width="100" align="center">凉菜</uni-th>
					<uni-th width="90" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">
						<view class="date">{{ item.date }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonsoup }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.fruit }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.cold }}</view>
					</uni-td>
					<uni-td>
						<view>
							<button size="mini" type="primary" @click="getRowData(item)">修改</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tableData : [],
				loading : false
			}
		},
		onShow() {
			this.getTableData();
		},
		methods: {
			getTableData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readNoonMenuData",
				}).then((res) => {
					this.tableData = res.result.data;
					this.loading = false;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getRowData(item) {
				// 将当前行数据传至新页面
				console.log('准备传的数据',item);
				uni.navigateTo({
					url : 'modify/noonmodify?item='+ encodeURIComponent(JSON.stringify(item)),
					success : function(res) {
						console.log('回调成功',res);
					},
					fail : function(err) {
						console.log('回调失败',err);
					}
				});
			}
		}
	}
</script>

<style>

</style>