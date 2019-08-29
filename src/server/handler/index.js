const fs = require('fs')
const path = require('path')

const handler = () => {
	const files = fs.readdirSync(__dirname)
	const middlewares = {}

	for (const f of files) {
		if (f === 'index.js' || path.extname(f) !== '.js') {
			continue
		}
		try {
			const mod = f.replace(path.extname(f), '')
			const modpath = path.join(__dirname, mod)
			let module = require(modpath)
			middlewares[mod] = module
		} catch (err) {
			console.log(err)
		}
	}
	return middlewares
}

module.exports = handler
