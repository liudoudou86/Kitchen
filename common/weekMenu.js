// 封装周别菜单函数
const weekMenu = function() {
	// var date = ['周一','周二','周三','周四','周五','周六','周日']
	// console.log(date)
	// 调用云函数查询
	uniCloud.callFunction({
		name: "readKitchenData",
		data: {
			time : '早'
		}
	}).then((res) => {
		var data = res.result.data;
		for (var i in data) { // 遍历json中的属性值
			var morningData = data[i].nickname
			// console.log(morningData)
		};
	}).catch((err) => {
		console.log(err);
	});
	console.log(this.morningData)
	/*
	// 调用云函数查询
	uniCloud.callFunction({
		name: "readKitchenData",
		data: {
			time : '中'
		}
	}).then((res) => {
		var data = res.result.data;
		for (var i in data) { // 遍历json中的属性值
			var noon = data[i].nickname
			console.log(noon)
		};
	}).catch((err) => {
		console.log(err)
	});
	// 调用云函数查询
	uniCloud.callFunction({
		name: "readKitchenData",
		data: {
			time : '晚'
		}
	}).then((res) => {
		var data = res.result.data;
		for (var i in data) { // 遍历json中的属性值
			var night = data[i].nickname
			console.log(night)
		};
	}).catch((err) => {
		console.log(err)
	});
	// 调用云函数查询
	uniCloud.callFunction({
		name: "readKitchenData",
		data: {
			time : '汤'
		}
	}).then((res) => {
		var data = res.result.data;
		for (var i in data) { // 遍历json中的属性值
			var soup = data[i].nickname
			console.log(soup)
		};
	}).catch((err) => {
		console.log(err)
	});
	// 调用云函数查询
	uniCloud.callFunction({
		name: "readKitchenData",
		data: {
			time : '水果'
		}
	}).then((res) => {
		var data = res.result.data;
		for (var i in data) { // 遍历json中的属性值
			var fruit = data[i].nickname
			console.log(fruit)
		};
	}).catch((err) => {
		console.log(err)
	});
	// 生成周别菜谱
	uniCloud.callFunction({
		name: "insertWeekData",
		data: {
			date : date,
			morning : morning,
			noon : noon,
			night : night,
			soup : soup,
			fruit : fruit
		}
	}).then((res) => {
		console.log(res);
	}).catch((err) =>{
		console.log(err);
	});
	*/
}
// 导出函数，getPosition是vue调用函数的接口
export default{
	weekMenu
}