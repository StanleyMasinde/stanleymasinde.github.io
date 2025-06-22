export default defineEventHandler(async event => {
	const { name, email, message } = await readBody(event)

	await handleContactForm(name, email, message)

	return {
		message: 'OK'
	}
})
