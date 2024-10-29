const { I } = inject()

class LoginPage {
	fields: {
		username: string
		password: string
		buttonText: string
		textInLoginPage: string
	}

	constructor() {
		this.fields = {
			username: '#user_login',
			password: '#user_password',
			buttonText: 'Sign in',
			textInLoginPage: 'Log in to ZeroBank',
		}
	}

	async fillTheFields(username: string, password: string) {
		const amNotILoggedIn = await globalThis.tryTo(() =>
			I.see(this.fields.textInLoginPage)
		)
		if (amNotILoggedIn) {
			I.fillField(this.fields.username, username)
			I.fillField(this.fields.password, password)
			I.click(this.fields.buttonText)
		}
	}
}

export = new LoginPage()
