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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onShow() {},
		methods: {}
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