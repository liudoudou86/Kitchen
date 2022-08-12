'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('创建周别早餐菜谱: ', event)
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 清空数据库数据
	const removeWeek = await db.collection('morningmenu').remove();
	const removeMaterials = await db.collection('morningmaterials').remove();
	
	// 创建时间周期的数组
	const dates = ['周一','周二','周三','周四','周五','周六','周日'];
	
	// 创建早餐主食的菜谱数组
	const mf = await db.collection('cooking').where({
		time : '早餐主食'
	}).get();
	const morningFoods = []; // 创建空数组
	const morningFoodsMaterials = [];
	const mfData = mf.data;
	for (let i=0; i < mfData.length; i++) { // 通过for循环生成数据
		morningFoods.push(mfData[i].nickname);
		morningFoodsMaterials.push(mfData[i].materials);
	};
	// 对数组随机排序
	const newMorningFoods = [];
	const newMorningFoodsMaterials = [];
	const mfLength = morningFoods.length; // 需要单独将长度定义
	for (let i=0; i < mfLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (mfLength - i));
		newMorningFoods[i] = morningFoods[index];
		newMorningFoodsMaterials[i] = morningFoodsMaterials[index];
		morningFoods.splice(index, 1); // 删除该元素
		morningFoodsMaterials.splice(index, 1);
	};
	// 组合早餐主食配料表
	const morningFoodsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		morningFoodsMaterialsList.push({
			name : newMorningFoods[i],
			text : newMorningFoodsMaterials[i]
		})
	};
	const newMorningFoodsMaterialsList = await db.collection('morningmaterials').add(morningFoodsMaterialsList);

	// 创建早餐汤的菜谱数组
	const ms = await db.collection('cooking').where({
		time : '早餐汤'
	}).get();
	const morningSoups = []; // 创建空数组
	const morningSoupsMaterials = [];
	const msData = ms.data;
	for (let i=0; i < msData.length; i++) { // 通过for循环生成数据
		morningSoups.push(msData[i].nickname);
		morningSoupsMaterials.push(msData[i].materials);
	};
	// 对数组随机排序
	const newMorningSoups = [];
	const newMorningSoupsMaterials = [];
	const msLength = morningSoups.length; // 需要单独将长度定义
	for (let i=0; i < msLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (msLength - i));
		newMorningSoups[i] = morningSoups[index];
		newMorningSoupsMaterials[i] = morningSoupsMaterials[index];
		morningSoups.splice(index, 1); // 删除该元素
		morningSoupsMaterials.splice(index, 1);
	};
	// 组合早餐汤配料表
	const morningSoupsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		morningSoupsMaterialsList.push({
			name : newMorningSoups[i],
			text : newMorningSoupsMaterials[i]
		})
	};
	const newMorningSoupsMaterialsList = await db.collection('morningmaterials').add(morningSoupsMaterialsList);

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
	const newFruitsMaterials = [];
	const fLength = fruits.length;
	for (let i=0; i < fLength; i++) {
		let index = Math.floor(Math.random() * (fLength - i));
		newFruits[i] = fruits[index];
		newFruitsMaterials[i] = fruitsMaterials[index];
		fruits.splice(index, 1);
		fruitsMaterials.splice(index, 1);
	};
	// 组合水果配料表
	const fruitsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		fruitsMaterialsList.push({
			name : newFruits[i],
			text : newFruitsMaterials[i]
		})
	};
	const newFruitsMaterialsList = await db.collection('morningmaterials').add(fruitsMaterialsList);
	
	// 创建其他的菜谱数组
	const o = await db.collection('cooking').where({
		time : '其他'
	}).get();
	const others = [];
	const othersMaterials = [];
	const oData = o.data;
	for (let i=0; i < oData.length; i++) {
		others.push(oData[i].nickname);
		othersMaterials.push(oData[i].materials);
	};
	// 对数组随机排序
	const newOthers = [];
	const newOthersMaterials = [];
	const oLength = others.length;
	for (let i=0; i < oLength; i++) {
		let index = Math.floor(Math.random() * (oLength - i));
		newOthers[i] = others[index];
		newOthersMaterials[i] = othersMaterials[index];
		others.splice(index, 1);
		othersMaterials.splice(index, 1);
	};
	// 组合其他配料表
	const othersMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		othersMaterialsList.push({
			name : newOthers[i],
			text : newOthersMaterials[i]
		})
	};
	const newOthersMaterialsList = await db.collection('morningmaterials').add(othersMaterialsList);
	
	// 组合以上数组
	const morningMenuList =[];
	for (let i=0; i<dates.length; i++) {
		morningMenuList.push({
			date : dates[i],
			morningfood : newMorningFoods[i],
			morningsoup : newMorningSoups[i],
			fruit : newFruits[i],
			other : newOthers[i]
		})
	};
	console.log('新组合的早餐全部对象: ',morningMenuList);
	
	// 将生成的数组插入数据库
	const res = await db.collection('morningmenu').add(morningMenuList);
	
	//返回数据给客户端
	return res;
};