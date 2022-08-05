<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="60" align="center">周</uni-th>
					<uni-th width="100" align="center">早</uni-th>
					<uni-th width="100" align="center">中</uni-th>
					<uni-th width="100" align="center">晚</uni-th>
					<uni-th width="100" align="center">汤</uni-th>
					<uni-th width="100" align="center">水果</uni-th>
					<uni-th width="90" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">
						<view class="date">{{ item.date }}</view>
					</uni-td>
					<uni-td align="left">
						<view class="morning">{{ item.morning }}</view>
					</uni-td>
					<uni-td align="left">
						<view class="noon">{{ item.noon }}</view>
					</uni-td>
					<uni-td align="left">
						<view class="night">{{ item.night }}</view>
					</uni-td>
					<uni-td align="left">
						<view class="soup">{{ item.soup }}</view>
					</uni-td>
					<uni-td align="left">
						<view class="fruit">{{ item.fruit }}</view>
					</uni-td>
					<uni-td>
						<navigator class="uni-group" url="/pages/setting/weekmenu/weekmenu" hover-class="navigator-hover">
							<button size="mini" type="primary">修改</button>
						</navigator>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{ materials }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tableData : [],
				materials : [],
				loading : false
			}
		},
		onShow() {
			this.getTableDataList();
			this.getMaterialsDataList();
		},
		methods: {
			getTableDataList() {
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readWeekData",
				}).then((res) => {
					this.tableData = res.result.data
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getMaterialsDataList() {
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readMaterialsData",
				}).then((res) => {
					this.materials = res.result
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
	
	.text-box {
		margin-bottom: 40rpx;
		padding: 40rpx 0;
		display: flex;
		min-height: 300rpx;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30rpx;
		color: #353535;
		line-height: 1.8;
	}

</style>