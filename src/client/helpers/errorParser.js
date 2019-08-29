const errorParser = (field, formFields, apiError) => {
	let error = null
	if (apiError && apiError[field]) {
		error = apiError[field]
	} else if (formFields[field].meta.error && formFields[field].meta.touched) {
		error = formFields[field].meta.error
	}
	return error
}
export default errorParser
