export default defineNuxtPlugin(async () => {
	console.log('Removing old serrvice workers for the transitional period')
	if (navigator.serviceWorker) {
		const registrations = await navigator.serviceWorker.getRegistrations()
		await Promise.all(registrations.map(reg => reg.unregister()))
	}
})
