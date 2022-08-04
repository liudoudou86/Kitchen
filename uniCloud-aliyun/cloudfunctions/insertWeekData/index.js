'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('创建周别菜谱: ', event)
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 清空数据库数据
	const removeWeek = await db.collection('week').remove();
	const removeMaterials = await db.collection('materials').remove();
	
	// 创建时间周期的数组
	const dates = ['周一','周二','周三','周四','周五','周六','周日'];
	
	// 创建早晨的菜谱数组
	const m = await db.collection('cooking').where({
		time : '早'
	}).get();
	const mornings = []; // 创建空数组
	const morningsMaterials = [];
	const mData = m.data;
	for (let i=0; i < mData.length; i++) { // 通过for循环生成数据
		mornings.push(mData[i].nickname);
		morningsMaterials.push(mData[i].materials);
	};
	// 对数组随机排序
	const newMornings = [];
	const mLength = mornings.length; // 需要单独将长度定义
	for (let i=0; i < mLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (mLength - i));
		newMornings[i] = mornings[index];
		mornings.splice(index, 1); // 删除该元素
	};
	
	// 创建中午的菜谱数组
	const n = await db.collection('cooking').where({
		time : '中'
	}).get();
	const noons = [];
	const noonsMaterials = [];
	const nData = n.data;
	for (let i=0; i < nData.length; i++) {
		noons.push(nData[i].nickname);
		noonsMaterials.push(nData[i].materials);
	};
	// 对数组随机排序
	const newNoons = [];
	const nLength = noons.length;
	for (let i=0; i < nLength; i++) {
		let index = Math.floor(Math.random() * (nLength - i));
		newNoons[i] = noons[index];
		noons.splice(index, 1);
	};
	
	// 创建晚上的菜谱数组
	const nt = await db.collection('cooking').where({
		time : '晚'
	}).get();
	const nights = [];
	const nightsMaterials = [];
	const ntData = nt.data;
	for (let i=0; i < ntData.length; i++) {
		nights.push(ntData[i].nickname);
		nightsMaterials.push(ntData[i].materials);
	};
	// 对数组随机排序
	const newNights = [];
	const ntLength = nights.length;
	for (let i=0; i < ntLength; i++) {
		let index = Math.floor(Math.random() * (ntLength - i));
		newNights[i] = nights[index];
		nights.splice(index, 1);
	};
	
	// 创建汤的菜谱数组
	const s = await db.collection('cooking').where({
		time : '汤'
	}).get();
	const soups = [];
	const soupsMaterials = [];
	const sData = s.data;
	for (let i=0; i < sData.length; i++) {
		soups.push(sData[i].nickname);
		soupsMaterials.push(sData[i].materials);
	};
	// 对数组随机排序
	const newSoups = [];
	const sLength = soups.length;
	for (let i=0; i < sLength; i++) {
		let index = Math.floor(Math.random() * (sLength - i));
		newSoups[i] = soups[index];
		soups.splice(index, 1);
	};
	
	// 创建水果的菜谱数组
	const f = await db.collection('cooking').where({
		time : '水果'
	}).get();
	const fruits = [];
	const fruitsMaterials = [];
	const fData = f.data;
	for (let i=0; i < fData.length; i++) {
		fruits.push(fData[i].nickname);
		fruitsMaterials.push(fData[i].materials);
	};
	// 对数组随机排序
	const newFruits = [];
	const fLength = fruits.length;
	for (let i=0; i < fLength; i++) {
		let index = Math.floor(Math.random() * (fLength - i));
		newFruits[i] = fruits[index];
		fruits.splice(index, 1);
	};
	
	// 组合以上数组
	const weekList =[];
	for (let i=0; i<dates.length; i++) {
		weekList.push({
			date : dates[i],
			morning : newMornings[i] + ' ' + newMornings[i+7] + ' ' + newMornings[i+15] + ' ' + newMornings[i+23],
			noon : newNoons[i] + ' ' + newNoons[i+7] + ' ' + newNoons[i+15] + ' ' + newNoons[i+23],
			night : newNights[i] + ' ' + newNights[i+7],
			soup : newSoups[i] + ' ' + newSoups[i+7],
			fruit : newFruits[i] + ' ' + newFruits[i+7]
		})
	};
	console.log('新组合的对象: ',weekList);
	
	// 使用ES6新特性合并多个数组
	const sumMaterials = [...morningsMaterials,...noonsMaterials,...nightsMaterials,...soupsMaterials,...fruitsMaterials];
	console.log('新组合的配料表: ',sumMaterials);
	
	// 将生成的数组插入数据库
	const res = await db.collection('week').add(weekList);
	const text = await db.collection('materials').add({
		text : sumMaterials
	});
	
	//返回数据给客户端
	return res;
};