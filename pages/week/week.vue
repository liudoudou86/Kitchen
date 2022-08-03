<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-td width="120" align="center">日</uni-td>
					<uni-td width="120" align="center">早</uni-td>
					<uni-th width="120" align="center">中</uni-th>
					<uni-th width="120" align="center">晚</uni-th>
					<uni-th width="120" align="center">汤</uni-th>
					<uni-th width="120" align="center">水果</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">
						<view class="date">{{ item.date }}</view>
					</uni-td>
					<uni-td align="center">
						<view class="morning">{{ item.morning }}</view>
					</uni-td>
					<uni-td align="center">
						<view class="noon">{{ item.noon }}</view>
					</uni-td>
					<uni-td align="center">
						<view class="night">{{ item.night }}</view>
					</uni-td>
					<uni-td align="center">
						<view class="soup">{{ item.soup }}</view>
					</uni-td>
					<uni-td align="center">
						<view class="fruit">{{ item.fruit }}</view>
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
				tableData: [],
				loading : false
			}
		},
		onShow() {
			this.getTableDataList();
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
			}
		}
	}
</script>

<style>

	.uni-group {
		display: flex;
		align-items: center;
	}

</style>