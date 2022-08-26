'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('查询条件: ',event);
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 读取早餐客户端的数据
	const mm = await db.collection('morningmaterials').get();
	const mLength = mm.affectedDocs;
	const mmData = mm.data;
	const morningMaterialsData = [];
	for (let i=0; i < mLength; i++) {
		morningMaterialsData.push(mmData[i].text);
	};
	console.log('morningMaterialsData',morningMaterialsData);
	
	// 读取正餐客户端的数据
	const nm = await db.collection('noonmaterials').get();
	const nLength = nm.affectedDocs;
	const nmData = nm.data;
	const noonMaterialsData = [];
	for (let i=0; i < nLength; i++) {
		noonMaterialsData.push(nmData[i].text);
	};
	console.log('noonMaterialsData',noonMaterialsData);
	
	// 拼接两个数组
	const sumMaterialsData = [...morningMaterialsData,...noonMaterialsData]
	// 把数组转换成字符串
	const str = sumMaterialsData.toString();
	// 将，替换为空格
	const rep = str.replace(/,/g,' ');
	// 通过空格将字符串拆分
	const cut = rep.split(' ');
	// ES6数组去重
	const arr = Array.from(new Set(cut));
	// 把数组转换成字符串
	const list = arr.toString();
	// 将，替换为空格
	const res = list.replace(/,/g,' ');

	console.log('最终配料表: ',res);
	//返回数据给客户端
	return res

};
