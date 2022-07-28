<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-td width="100" align="center">早</uni-td>
					<uni-th width="100" align="center">中</uni-th>
					<uni-th width="100" align="center">晚</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">
						<view class="morning" v-for="(item, index) in morningData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials($event)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="noon" v-for="(item, index) in noonData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials($event)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="night" v-for="(item, index) in nightData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials($event)">{{ item.nickname }}</button>
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
				morningData : [],
				noonData : [],
				nightData : [],
				loading : false
			}
		},
		onShow() {
			this.getMorningDataList();
			this.getNoonDataList();
			this.getNightDataList();
		},
		methods: {
			getMorningDataList() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '早'
					}
				}).then((res) => {
					console.log(res);
					this.morningData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getNoonDataList() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '中'
					}
				}).then((res) => {
					console.log(res);
					this.noonData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getNightDataList() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '晚'
					}
				}).then((res) => {
					console.log(res);
					this.nightData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getMaterials(e) {
				// 获取菜谱名
				console.log(e.target.dataset);
				// let name = item.nickname;
				// console.log("按钮名：" + this.name);
				// // 调用云函数查询
				// uniCloud.callFunction({
				// 	name: "readKitchenData",
				// 	data: {
				// 		nickname : this.name,
				// 	}
				// }).then((res) => {
				// 	this.Data = res.result.data
				// 	uni.hideLoading()
				// 	uni.showModal({
				// 		content: this.Data.materials,
				// 		showCancel: false
				// 	});
				// 	console.log(res)
				// }).catch((err) => {
				// 	console.log(err)
				// });
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