<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-td width="100" align="center">早</uni-td>
					<uni-th width="100" align="center">中</uni-th>
					<uni-th width="100" align="center">晚</uni-th>
					<uni-th width="100" align="center">汤</uni-th>
					<uni-th width="100" align="center">水果</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">
						<view class="morning" v-for="(item, index) in morningData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="noon" v-for="(item, index) in noonData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="night" v-for="(item, index) in nightData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="soup" v-for="(item, index) in soupData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view class="fruit" v-for="(item, index) in fruitData" :key="index">
							<button class="uni-button" size="mini" type="primary" @click="getMaterials(item)">{{ item.nickname }}</button>
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
				soupData: [],
				fruitData: [],
				loading : false
			}
		},
		onShow() {
			this.getMorningDataList();
			this.getNoonDataList();
			this.getNightDataList();
			this.getSoupDataList();
			this.getFruitDataList();
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
			getSoupDataList() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '汤'
					}
				}).then((res) => {
					console.log(res);
					this.soupgData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getFruitDataList() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '水果'
					}
				}).then((res) => {
					console.log(res);
					this.fruitData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getMaterials(item) {
				// 通过遍历数组读取元素
				console.log(item.materials);
				uni.hideLoading();
				uni.showModal({
					content: '配料表：\n' + item.materials,
					showCancel: false,
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