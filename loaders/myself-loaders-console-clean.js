// 去除console
module.exports = (src) => {
	let result = src.replace(/console\.log(.+)/ig,'');
	console.log('loaders被使用了')
	return result;//返回必须是字符串或者arrayBuffer
}