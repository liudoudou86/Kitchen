'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('查询条件: ', event)
	// 初始化数据库
	const db = uniCloud.database();
	// 删除客户端的数据
	const res = await db.collection('cooking').where(event).remove();
	console.log("删除数据", res)
	//返回数据给客户端
	return res
};
