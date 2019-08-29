const fs = require('fs')
const path = require('path')

const ignores = ['index.js', 'db.js']

module.exports = handler

function handler() {
	const files = fs.readdirSync(__dirname)
	const models = {}

	for (const f of files) {
		if (ignores.indexOf(f) !== -1 || path.extname(f) !== '.js') {
			continue
		}
		try {
			const mod = f.replace(path.extname(f), '')
			const modpath = path.join(__dirname, mod)
			let module = require(modpath)()
			models[mod] = module
		} catch (err) {
			console.log(err)
		}
	}

	return models
}
