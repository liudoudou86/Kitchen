'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('创建周别菜谱: ', event)
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 清空数据库数据
	const removeWeek = await db.collection('morningmenu').remove();
	const removeMaterials = await db.collection('materials').remove();
	
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
	const mfLength = morningFoods.length; // 需要单独将长度定义
	for (let i=0; i < mfLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (mfLength - i));
		newMorningFoods[i] = morningFoods[index];
		morningFoods.splice(index, 1); // 删除该元素
	};

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
	const msLength = morningSoups.length; // 需要单独将长度定义
	for (let i=0; i < msLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (msLength - i));
		newMorningSoups[i] = morningSoups[index];
		morningSoups.splice(index, 1); // 删除该元素
	};
	
	// 创建午餐主食的菜谱数组
	const nf = await db.collection('cooking').where({
		time : '午餐主食'
	}).get();
	const noonFoods = [];
	const noonFoodsMaterials = [];
	const nfData = nf.data;
	for (let i=0; i < nfData.length; i++) {
		noonFoods.push(nfData[i].nickname);
		noonFoodsMaterials.push(nfData[i].materials);
	};
	// 对数组随机排序
	const newNoonFoods = [];
	const nfLength = noonFoods.length;
	for (let i=0; i < nfLength; i++) {
		let index = Math.floor(Math.random() * (nfLength - i));
		newNoonFoods[i] = noonFoods[index];
		noonFoods.splice(index, 1);
	};
	
	// 创建午餐汤的菜谱数组
	const ns = await db.collection('cooking').where({
		time : '午餐汤'
	}).get();
	const noonSoups = [];
	const noonSoupsMaterials = [];
	const nsData = ns.data;
	for (let i=0; i < nsData.length; i++) {
		noonSoups.push(nsData[i].nickname);
		noonSoupsMaterials.push(nsData[i].materials);
	};
	// 对数组随机排序
	const newNoonSoups = [];
	const nsLength = noonSoups.length;
	for (let i=0; i < nsLength; i++) {
		let index = Math.floor(Math.random() * (nsLength - i));
		newNoonSoups[i] = noonSoups[index];
		noonSoups.splice(index, 1);
	};
	
	// 创建凉菜的菜谱数组
	const c = await db.collection('cooking').where({
		time : '凉菜'
	}).get();
	const clods = [];
	const clodsMaterials = [];
	const cData = c.data;
	for (let i=0; i < cData.length; i++) {
		clods.push(cData[i].nickname);
		clodsMaterials.push(cData[i].materials);
	};
	// 对数组随机排序
	const newClods = [];
	const cLength = clods.length;
	for (let i=0; i < cLength; i++) {
		let index = Math.floor(Math.random() * (cLength - i));
		newClods[i] = clods[index];
		clods.splice(index, 1);
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
	const oLength = others.length;
	for (let i=0; i < oLength; i++) {
		let index = Math.floor(Math.random() * (oLength - i));
		newOthers[i] = others[index];
		others.splice(index, 1);
	};
	
	// 组合以上数组
	const morningMenuList =[];
	for (let i=0; i<dates.length; i++) {
		morningMenuList.push({
			date : dates[i],
			morningfood : newMorningFoods[i],
			morningsoup : newMorningSoups[i],
			noonfood : newNoonFoods[i],
			noonsoup : newNoonSoups[i],
			clod : newClods[i],
			fruit : newFruits[i],
			other : newOthers[i],
		})
	};
	console.log('新组合的对象: ',morningMenuList);
	
	// 使用ES6新特性合并多个数组
	const sumMaterials = [...morningFoodsMaterials,...morningSoupsMaterials,...noonFoodsMaterials,...noonSoupsMaterials,...clodsMaterials,...fruitsMaterials,...othersMaterials];
	console.log('新组合的配料表: ',sumMaterials);
	
	// 将生成的数组插入数据库
	const res = await db.collection('morningmenu').add(morningMenuList);
	const text = await db.collection('materials').add({
		text : sumMaterials
	});
	
	//返回数据给客户端
	return res;
};