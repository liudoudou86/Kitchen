<template>
	<view class="form">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit()" @reset="formReset()">
				<view class="uni-form-item uni-column">
					<view class="title">时间：</view>
					<radio-group name="time">
						<label>
							<radio value="早餐主食" /><text>早餐-主食</text>
						</label>
						<label>
							<radio value="早餐汤" /><text>早餐-汤/粥</text>
						</label>
						<label>
							<radio value="正餐主菜" /><text>正餐-菜</text>
						</label>
						<label>
							<radio value="正餐汤" /><text>正餐-汤/粥</text>
						</label>
						<label>
							<radio value="凉菜" /><text>凉菜</text>
						</label>
						<label>
							<radio value="水果" /><text>水果</text>
						</label>
						<label>
							<radio value="其他" /><text>其他</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">菜名：</view>
					<input class="uni-input" name="nickname" placeholder="请输入菜名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">配料表：</view>
					<input class="uni-input" name="materials" placeholder="请输入配料" />
				</view>
				<view class="uni-btn-v">
					<button  type="primary" form-type="submit">保存提交</button>
					<button type="warn" form-type="reset">重置页面</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {}
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

<style lang="scss">
	
	.form{
		padding: 0 30upx;
		margin-top: 10px;
		.uni-padding-wrap {
		    margin-top: 40rpx;
		    margin-bottom: 40rpx;
			margin-left: 40rpx;
			margin-right: 40rpx;
			.uni-form-item {
			    margin-top: 40rpx;
			    margin-bottom: 40rpx;
				margin-left: 40rpx;
				margin-right: 40rpx;
				.title {
				    margin-top: 40rpx;
				    margin-bottom: 40rpx;
				}
				.uni-input {
				    margin-top: 40rpx;
				    margin-bottom: 40rpx;
				}
				label {
					margin-left: 20rpx;
					margin-right: 20rpx;
				}
			}
		}
	}

	.uni-btn-v {
	    margin: 0 auto;
	    width: 95%;
		button {
		    margin-top: 50rpx;
		    margin-bottom: 50rpx;
		}
	}

</style>