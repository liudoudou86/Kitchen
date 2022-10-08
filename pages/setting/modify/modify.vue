<template>
	<view class="form">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formModify()" @reset="formReset()">
				<view class="uni-form-item uni-column">
					<view class="title">菜名：</view>
					<input class="uni-input" name="nickname" type="text" @input="inputNickname" value="" placeholder="请输入菜名" />
					<block v-for="(item, _id) in nickNameList" :key="_id">
						<span>{{item}}</span>
					</block>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">配料表：</view>
					<input class="uni-input" v-model="materialsData" name="materials" type="text" @input="inputMaterials" placeholder="请输入配料" />
				</view>
				<view class="uni-btn-v">
					<button  type="primary" form-type="submit">修改菜谱</button>
					<button type="warn" form-type="reset">重置页面</button>
					<button type="warn" @click="formDelete()">删除菜谱</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				nickNameList : [],
				materialsData : []
			}
		},
		methods: {
			// 读取输入的昵
			inputNickname: function(e) {
				this.nickname = e.detail.value;
				console.log(this.nickname);
				if (this.nickname === '') {
					return this.nickNameList = [];
				}
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readKitchenQuery",
					data: {
						nickname : this.nickname
					}
				}).then((res) => {
					console.log(res);
					let rData = res.result.data;
					for (let i=0; i< rData.length; i++) {
						this.nickNameList.push(rData[i].nickname);
					};
					this.materialsData = rData[0].materials;
					console.log('模糊查询列表',this.materialsData);
					console.log('模糊查询列表',this.nickNameList);
				}).catch((err) => {
					console.log(err);
				});
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
			formReset: function(e) {
				console.log('清空数据')
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