'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('接收提价的数据: ', event)
	// 初始化数据库
	const db = uniCloud.database();
	if (event.type === 'other') {
		console.log('旧数据',event.other);
		todo : 使用改字段进行配料表修改
		// 通过条件更新客户端的数据
		const res = await db.collection('morningmenu').where({
			date : event.date
		}).update({
			other : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	};
};