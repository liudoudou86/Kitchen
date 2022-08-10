'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('接收提价的数据: ', event)
	// 初始化数据库
	const db = uniCloud.database();
	if (event.type === 'morningfood') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('morningmenu').where({
			date : event.date
		}).update({
			morningfood : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('morningmaterials').where({
			name : event.morningfood
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	}else if (event.type === 'morningsoup') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('morningmenu').where({
			date : event.date
		}).update({
			morningsoup : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('morningmaterials').where({
			name : event.morningsoup
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else if (event.type === 'fruit') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('morningmenu').where({
			date : event.date
		}).update({
			fruit : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('morningmaterials').where({
			name : event.fruit
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	} else if (event.type === 'other') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('morningmenu').where({
			date : event.date
		}).update({
			other : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('morningmaterials').where({
			name : event.other
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	}
};