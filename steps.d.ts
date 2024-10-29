/* eslint-disable */
/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js')
type loginPage = typeof import('./pages/loginPage')
type PlaywrightVideoAllure =
	typeof import('./utils/playwrightVideoAllure_helper')
type DbHelper = import('./node_modules/codeceptjs-dbhelper')
type ResembleHelper = import('codeceptjs-resemblehelper')
type ChaiWrapper = import('codeceptjs-chai')

declare namespace CodeceptJS {
	interface SupportObject {
		I: I
		current: any
		loginPage: loginPage
	}
	interface Methods
		extends Playwright,
			PlaywrightVideoAllure,
			REST,
			GraphQL,
			DbHelper,
			ResembleHelper,
			ChaiWrapper {}
	interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
	namespace Translation {
		interface Actions {}
	}
}
