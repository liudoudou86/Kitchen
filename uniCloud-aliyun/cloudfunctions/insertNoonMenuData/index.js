'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('创建周别正餐菜谱: ', event)
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 清空数据库数据
	const removeWeek = await db.collection('noonmenu').remove();
	const removeMaterials = await db.collection('noonmaterials').remove();
	
	// 创建时间周期的数组
	const dates = ['周一','周二','周三','周四','周五','周六','周日'];
	
	// 创建早餐主食的菜谱数组
	const nf = await db.collection('cooking').where({
		time : '正餐主菜'
	}).get();
	const noonFoods = []; // 创建空数组
	const noonFoodsMaterials = [];
	const nfData = nf.data;
	for (let i=0; i < nfData.length; i++) { // 通过for循环生成数据
		noonFoods.push(nfData[i].nickname);
		noonFoodsMaterials.push(nfData[i].materials);
	};
	// 对数组随机排序
	const newNoonFoods = [];
	const newNoonFoodsMaterials = [];
	const nfLength = noonFoods.length; // 需要单独将长度定义
	for (let i=0; i < nfLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (nfLength - i));
		newNoonFoods[i] = noonFoods[index];
		newNoonFoodsMaterials[i] = noonFoodsMaterials[index];
		noonFoods.splice(index, 1); // 删除该元素
		noonFoodsMaterials.splice(index, 1);
	};
	// 组合早餐主食配料表
	const noonFoodsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		noonFoodsMaterialsList.push({
			name : newNoonFoods[i],
			text : newNoonFoodsMaterials[i]
		})
	};
	const newNoonFoodsMaterialsList = await db.collection('noonmaterials').add(noonFoodsMaterialsList);

	// 创建早餐汤的菜谱数组
	const ns = await db.collection('cooking').where({
		time : '早餐汤'
	}).get();
	const noonSoups = []; // 创建空数组
	const noonSoupsMaterials = [];
	const nsData = ns.data;
	for (let i=0; i < nsData.length; i++) { // 通过for循环生成数据
		noonSoups.push(nsData[i].nickname);
		noonSoupsMaterials.push(nsData[i].materials);
	};
	// 对数组随机排序
	const newNoonSoups = [];
	const newNoonSoupsMaterials = [];
	const nsLength = noonSoups.length; // 需要单独将长度定义
	for (let i=0; i < nsLength; i++) { // 重新排列index
		let index = Math.floor(Math.random() * (nsLength - i));
		newNoonSoups[i] = noonSoups[index];
		newNoonSoupsMaterials[i] = noonSoupsMaterials[index];
		noonSoups.splice(index, 1); // 删除该元素
		noonSoupsMaterials.splice(index, 1);
	};
	// 组合早餐汤配料表
	const noonSoupsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		noonSoupsMaterialsList.push({
			name : newNoonSoups[i],
			text : newNoonSoupsMaterials[i]
		})
	};
	const newNoonSoupsMaterialsList = await db.collection('noonmaterials').add(noonSoupsMaterialsList);

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
	const c = await db.collection('cooking').where({
		time : '凉菜'
	}).get();
	const colds = [];
	const coldsMaterials = [];
	const cData = c.data;
	for (let i=0; i < cData.length; i++) {
		colds.push(cData[i].nickname);
		coldsMaterials.push(cData[i].materials);
	};
	// 对数组随机排序
	const newColds = [];
	const newColdsMaterials = [];
	const cLength = colds.length;
	for (let i=0; i < cLength; i++) {
		let index = Math.floor(Math.random() * (cLength - i));
		newColds[i] = colds[index];
		newColdsMaterials[i] = coldsMaterials[index];
		colds.splice(index, 1);
		coldsMaterials.splice(index, 1);
	};
	// 组合其他配料表
	const coldsMaterialsList =[];
	for (let i=0; i<dates.length; i++) {
		coldsMaterialsList.push({
			name : newColds[i],
			text : newColdsMaterials[i]
		})
	};
	const newColdsMaterialsList = await db.collection('noonmaterials').add(coldsMaterialsList);
	
	// 组合以上数组
	const noonMenuList =[];
	for (let i=0; i<dates.length; i++) {
		noonMenuList.push({
			date : dates[i],
			noonfood1 : newNoonFoods[i],
			noonfood2 : newNoonFoods[i+7],
			noonfood3 : newNoonFoods[i+14],
			noonfood4 : newNoonFoods[i+21],
			noonfood5 : newNoonFoods[i+28],
			noonsoup : newNoonSoups[i],
			fruit : newFruits[i],
			cold : newColds[i]
		})
	};
	console.log('新组合的正餐全部对象: ',noonMenuList);
	
	// 将生成的数组插入数据库
	const res = await db.collection('noonmenu').add(noonMenuList);
	
	//返回数据给客户端
	return res;
};