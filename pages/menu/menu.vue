<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="130" align="center">早餐-主食</uni-th>
					<uni-th width="130" align="center">早餐-汤/粥</uni-th>
					<uni-th width="130" align="center">午餐-主食</uni-th>
					<uni-th width="130" align="center">午餐-汤/粥</uni-th>
					<uni-th width="130" align="center">凉菜</uni-th>
					<uni-th width="130" align="center">水果</uni-th>
					<uni-th width="130" align="center">其他</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">
						<view v-for="(item, index) in morningFoodData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in morningSoupData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in noonFoodData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in noonSoupData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in coldData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in fruitData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
						</view>
					</uni-td>
					<uni-td align="center">
						<view v-for="(item, index) in otherData" :key="index">
							<button class="uni-button" size="mini" type="default" @click="getMaterials(item)">{{ item.nickname }}</button>
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
				morningFoodData : [],
				morningSoupData : [],
				noonFoodData : [],
				noonSoupData : [],
				coldData : [],
				fruitData: [],
				otherData: [],
				loading : false
			}
		},
		onShow() {
			this.getMorningFoodData();
			this.getMorningSoupData();
			this.getNoonFoodData();
			this.getNoonSoupData();
			this.getColdData();
			this.getFruitData();
			this.getOtherData();
		},
		methods: {
			getMorningFoodData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '早餐主食'
					}
				}).then((res) => {
					console.log(res);
					this.morningFoodData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getMorningSoupData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '早餐汤'
					}
				}).then((res) => {
					console.log(res);
					this.morningSoupData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getNoonFoodData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '午餐主食'
					}
				}).then((res) => {
					console.log(res);
					this.noonFoodData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getNoonSoupData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '午餐汤'
					}
				}).then((res) => {
					console.log(res);
					this.noonSoupData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getColdData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '凉菜'
					}
				}).then((res) => {
					console.log(res);
					this.coldData = res.result.data;
					this.loading = false;
				}).catch((err) => {
					console.log(err);
				});
			},
			getFruitData() {
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
			getOtherData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '其他'
					}
				}).then((res) => {
					console.log(res);
					this.otherData = res.result.data;
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