const prepareOffset = (page, limit) => {
	page = page && parseInt(page, 10) ? parseInt(page, 10) : 1
	limit = limit && parseInt(limit, 10) ? parseInt(limit, 10) : 5
	const offset = page < 1 ? limit : (page - 1) * limit
	return { page, offset, limit }
}

module.exports = prepareOffset
