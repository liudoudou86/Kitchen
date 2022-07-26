<template>
	<view>
		<page-head title="form"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">时间</view>
					<radio-group name="time">
						<label>
							<radio value="早" /><text>早晨</text>
						</label>
						<label>
							<radio value="中" /><text>中午</text>
						</label>
						<label>
							<radio value="晚" /><text>晚上</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">菜名</view>
					<input class="uni-input" name="nickname" placeholder="请输入菜名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">材料</view>
					<input class="uni-input" name="materials" placeholder="请输入材料" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">保存</button>
					<button type="default" form-type="reset">重置</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
			}
		},
		methods: {
			formSubmit: function(e) {
				const formData = e.detail.value;
				console.log('提交表单数据：' + JSON.stringify(e.detail.value))
				// 调用云函数向云数据库插入数据
				uniCloud.callFunction({
					name: "insertKitchenData",
					data: {
						time : formData.time,
						nickname : formData.nickname,
						materials : formData.materials
					}
				}).then((res) => {
					console.log(res);
					uni.hideLoading()
					uni.showModal({
						content: "保存成功",
						showCancel: false
					})
				}).catch((err) =>{
					console.log(err);
					uni.hideLoading()
					uni.showModal({
						content: "保存失败",
						showCancel: false
					})
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
	
</script>

<style>
	
	.uni-form-item .title {
		padding: 20rpx 0;
	}
	
	button {
	    margin-top: 30rpx;
	    margin-bottom: 30rpx;
	}
	
	.uni-btn-v {
	    margin: 0 auto;
	    width: 70%;
	}

</style>