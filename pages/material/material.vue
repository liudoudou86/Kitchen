<template>
	<view class="uni-padding-wrap uni-common-mt">
		<uni-section title="【采购单】" type="line" padding>
			<text>{{ materialsData }}</text>
		</uni-section>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				materialsData : []
			}
		},
		onShow() {
			this.getMaterialsData();
		},
		methods: {
			getMaterialsData() {
				this.loading = true;
				// 调用云函数查询
				uniCloud.callFunction({
					name: "readMorningMaterialsData",
				}).then((res) => {
					this.materialsData = res.result;
					this.loading = false;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			}
		},
	}

</script>

<style>
	
	.uni-padding-wrap {
		margin-top: 30rpx;
	}

</style>