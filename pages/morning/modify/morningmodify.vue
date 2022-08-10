<template>
	<view class="form">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">种类：</view>
					<radio-group name="type">
						<label>
							<radio value="morningfood" /><text>主食</text>
						</label>
						<label>
							<radio value="morningsoup" /><text>汤/粥</text>
						</label>
						<label>
							<radio value="fruit" /><text>水果</text>
						</label>
						<label>
							<radio value="other" /><text>其他</text>
						</label>
					</radio-group>
					<view class="title">菜名：</view>
					<input class="uni-input" name="nickname" placeholder="请输入菜名" />
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
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			console.log('上一个页面传递过来的参数对象',item);
			this.objData = item;
		},
		methods: {
			formSubmit: function(e) {
				const that = this;
				const formData = e.detail.value;
				console.log('提交表单数据：' + JSON.stringify(e.detail.value));
				// 调用云函数向云数据库插入数据
				uniCloud.callFunction({
					name: "updateMorningMaterialsData",
					data: {
						date : that.objData.date,
						type : formData.type,
						morningfood : that.objData.morningfood,
						morningsoup : that.objData.morningsoup,
						fruit : that.objData.fruit,
						other :  that.objData.other,
						oldNickname : that.objData.nickname,
						nickname : formData.nickname,
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
	
	.form{
		padding: 0 30upx;
		margin-top: 10px;
	}
	
	.uni-padding-wrap {
	    margin-top: 40rpx;
	    margin-bottom: 40rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
	}
	
	.uni-form-item {
	    margin-top: 40rpx;
	    margin-bottom: 40rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
	}
	
	.uni-form-item .title {
	    margin-top: 40rpx;
	    margin-bottom: 40rpx;
	}
	
	.uni-form-item .uni-input {
	    margin-top: 40rpx;
	    margin-bottom: 40rpx;
	}
	
	label {
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	
	button {
	    margin-top: 30rpx;
	    margin-bottom: 30rpx;
	}
	
	.uni-btn-v {
	    margin: 0 auto;
	    width: 95%;
	}

</style>