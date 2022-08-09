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
					<button type="default" @click="addMorningMenu()">早餐菜谱</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {}
		},
		methods: {
			addMorningMenu() {
				// 调用云函数向云数据库插入数据
				uniCloud.callFunction({
					name: "insertMorningMenuData",
				}).then((res) => {
					console.log(res);
					uni.hideLoading()
					uni.showModal({
						content: "生成成功",
						showCancel: false
					});
				}).catch((err) =>{
					console.log(err);
					uni.hideLoading()
					uni.showModal({
						content: "生成失败",
						showCancel: false
					});
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