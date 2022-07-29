<template>
	<view class="form">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formModify()">
				<view class="uni-form-item uni-column">
					<view class="title">菜名：</view>
					<input class="uni-input" name="nickname" type="text" @input="inputNickname" value="" placeholder="请输入菜名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">配料表：</view>
					<input class="uni-input" name="materials" type="text" @input="inputMaterials" value="" placeholder="请输入配料" />
				</view>
				<view class="uni-btn-v">
					<button  type="primary" form-type="submit">修改菜谱</button>
					<button type="warn" @click="formDelete()">删除菜谱</button>
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
			// 读取输入的昵
			inputNickname: function(e) {
				this.nickname = e.detail.value;
			},
			inputMaterials: function(e) {
				this.materials = e.detail.value;
			},
			formModify() {
				console.log('菜名：' + this.nickname)
				console.log('配料表：' + this.materials)
				// 调用云函数向云数据库修改数据
				uniCloud.callFunction({
					name: "updateKitchenData",
					data: {
						nickname : this.nickname,
						materials : this.materials
					}
				}).then((res) => {
					console.log(res);
					uni.hideLoading()
					uni.showModal({
						content: "修改成功",
						showCancel: false
					})
				}).catch((err) =>{
					console.log(err);
					uni.hideLoading()
					uni.showModal({
						content: "修改失败",
						showCancel: false
					})
				});
			},
			formDelete() {
				console.log(this.nickname)
				// 调用云函数向云数据库删除
				uniCloud.callFunction({
					name: "deleteKitchenData",
					data: {
						nickname : this.nickname,
					}
				}).then((res) => {
					console.log(res);
					uni.hideLoading()
					uni.showModal({
						content: "删除成功",
						showCancel: false
					})
				}).catch((err) =>{
					console.log(err);
					uni.hideLoading()
					uni.showModal({
						content: "删除失败",
						showCancel: false
					})
				});
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
	    margin-top: 50rpx;
	    margin-bottom: 50rpx;
		margin-left: 50rpx;
		margin-right: 50rpx;
	}
	
	.uni-form-item {
		margin-top: 50rpx;
		margin-bottom: 50rpx;
		margin-left: 50rpx;
		margin-right: 50rpx;
	}
	
	.uni-form-item .title {
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}
	
	.uni-form-item .uni-input {
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}
	
	label {
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	
	button {
	    margin-top: 50rpx;
	    margin-bottom: 50rpx;
	}
	
	.uni-btn-v {
	    margin: 0 auto;
	    width: 95%;
	}

</style>