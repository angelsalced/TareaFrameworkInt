const { I } = inject()

Given('Im logged in', async () => {
	I.wait(10)
})

Given(/^I select the contact$/, () => {
	I.wait(0)
})
When(
	/^I should create the appointment with (.*) , (.*) , (.*) , (.*) , (.*) , (.*)$/,
	(name, surname, phone, email, date, time) => {
		// eslint-disable-next-line no-console
		console.log(name, surname, phone, email, date, time)
		I.wait(0)
	}
)
