'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('查询条件: ', event)
	// 初始化数据库
	const db = uniCloud.database();
	// 通过条件更新客户端的数据
	if (event.time === '早') {
		const res = await db.collection('week').where({
			date : event.date
		}).update({
			morning : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else if (event.time === '中') {
		const res = await db.collection('week').where({
			date : event.date
		}).update({
			noon : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else if (event.time === '晚') {
		const res = await db.collection('week').where({
			date : event.date
		}).update({
			night : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else if (event.time === '汤') {
		const res = await db.collection('week').where({
			date : event.date
		}).update({
			soup : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else {
		const res = await db.collection('week').where({
			date : event.date
		}).update({
			fruit : event.nickname
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	}
};