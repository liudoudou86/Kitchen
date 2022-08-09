<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="60" align="center">时间</uni-th>
					<uni-th width="100" align="center">早餐-主食</uni-th>
					<uni-th width="100" align="center">早餐-汤/粥</uni-th>
					<uni-th width="100" align="center">午餐-主食</uni-th>
					<uni-th width="100" align="center">午餐-汤/粥</uni-th>
					<uni-th width="100" align="center">凉菜</uni-th>
					<uni-th width="100" align="center">水果</uni-th>
					<uni-th width="100" align="center">其他</uni-th>
					<uni-th width="90" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">
						<view class="date">{{ item.date }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.morningfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.morningsoup }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonfood }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.noonsoup }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.clod }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.fruit }}</view>
					</uni-td>
					<uni-td align="left">
						<view>{{ item.other }}</view>
					</uni-td>
					<uni-td>
						<navigator class="uni-group" url="/pages/setting/morningmenu/morningmenu" hover-class="navigator-hover">
							<button size="mini" type="primary">修改</button>
						</navigator>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>配料表: </text>
				<text>{{ materialsData }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tableData : [],
				materialsData : [],
				loading : false
			}
		},
		onShow() {
			this.getTableData();
			this.getMaterialsData();
		},
		methods: {
			getTableData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readMorningMenuData",
				}).then((res) => {
					this.tableData = res.result.data;
					this.loading = false;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getMaterialsData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readMaterialsData",
				}).then((res) => {
					this.materialsData = res.result;
					this.loading = false;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style>

	.uni-group {
		display: flex;
		align-items: center;
	}
	
	.uni-padding-wrap {
		margin-top: 30rpx;
		align-items: left;
	}

</style>