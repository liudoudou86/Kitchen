<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<navigator class="uni-btn-v" url="/pages/setting/submit/submit" hover-class="navigator-hover">
					<button type="default">新增菜谱</button>
				</navigator>
				<navigator class="uni-btn-v" url="/pages/setting/modify/modify" hover-class="navigator-hover">
					<button type="default">修改菜谱</button>
				</navigator>
				<view class="uni-btn-v">
					<button class="uni-button" size="default" type="primary" @click="getWeekData()">生成周别菜谱</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	import get from '@/common/weekMenu.js'; // 引用位置函数
	
	export default {
		data() {
			return {}
		},
		onShow() {},
		methods: {
			getWeekData() {
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenData",
					data: {
						time : '早'
					}
				}).then((res) => {
					var data = res.result.data;
					var morningData = [];
					for (var i in data) { // 遍历json中的属性值
						morningData.push(data[i].nickname);
					};
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
				
</script>

<style>

 .uni-btn-v {
	 margin-top: 50rpx;
	 margin-bottom: 50rpx;
	 margin-left: 50rpx;
	 margin-right: 50rpx;
 }
 
 .navigator-hover {
	 margin-top: 50rpx;
	 margin-bottom: 50rpx;
 }

</style>