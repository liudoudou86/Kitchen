'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('接收提价的数据: ', event)
	// 初始化数据库
	const db = uniCloud.database();
	if (event.type === 'noonfood1') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonfood1 : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonfood1
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	};
	if (event.type === 'noonfood2') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonfood2 : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonfood2
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	};
	if (event.type === 'noonfood3') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonfood3 : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonfood3
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	};
	if (event.type === 'noonfood4') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonfood4 : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonfood4
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	};
	if (event.type === 'noonfood5') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonfood5 : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonfood5
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res);
		//返回数据给客户端
		return res
	};
	if (event.type === 'noonsoup') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			noonsoup : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.noonsoup
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	};
	if (event.type === 'fruit') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			fruit : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.fruit
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	};
	if (event.type === 'cold') {
		// 通过修改名字获取新的配料表
		const newValue = await db.collection('cooking').where({
			nickname : event.nickname
		}).get();
		const newData = newValue.data[0].materials;
		// 通过条件更新客户端的数据
		const res = await db.collection('noonmenu').where({
			date : event.date
		}).update({
			cold : event.nickname
		});
		// 通过旧的名字更新表中所有数据
		const old = await db.collection('noonmaterials').where({
			name : event.cold
		}).update({
			name : event.nickname,
			text : newData
		});
		console.log("更新数据", res)
		//返回数据给客户端
		return res
	}
};