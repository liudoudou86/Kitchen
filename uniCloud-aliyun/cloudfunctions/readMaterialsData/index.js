'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('查询条件: ', event);
	
	// 初始化数据库
	const db = uniCloud.database();
	
	// 读取客户端的数据
	const m = await db.collection('materials').get();
	const materialsData = m.data[0].text;
	
	// 把数组转换成字符串
	const res = materialsData.toString();
	
	console.log("配料表", res);
	
	//返回数据给客户端
	return res
	
};
