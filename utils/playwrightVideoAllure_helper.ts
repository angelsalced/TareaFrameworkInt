/* eslint-disable */
import Helper from '@codeceptjs/helper'
import fs from 'fs'

class PlaywrightVideoAllure extends Helper {
	/**
	 * Constructor
	 *
	 * @param config
	 */
	constructor(config) {
		super(config)
	}

	/**
	 * Attach Video and Trace to Allure Report
	 * @param test
	 */
	async _attachVideo(test) {
		const { Playwright } = this.helpers

		if (Playwright) {
			await Playwright.browserContext.close()
			const allure = codeceptjs.container.plugins('allure')
			const FORMAT = 'video/webm'
			const FORMAT2 = 'application/zip'
			const TITLE = 'Execution Video'
			const TITLE2 = 'TRACE'
			const video =
				test.artifacts?.video || test._retriedTest?.artifacts?.video
			const trace = test.artifacts?.trace

			if (video) {
				// @ts-ignore
				codeceptjs.output.print(`Attaching Video: ${video}`)
				allure.addAttachment(TITLE, fs.readFileSync(video), FORMAT)
			}
			if (trace) {
				// @ts-ignore
				codeceptjs.output.print(`Attaching Trace: ${trace}`)
				allure.addAttachment(TITLE2, fs.readFileSync(trace), FORMAT2)
			}
		}
	}

	/**
	 * Event when Test Failed
	 *
	 * @param test
	 */
	async _failed(test) {
		await this._attachVideo(test)
	}

	/**
	 * Event when Test Passed
	 *
	 * @param test
	 */
	async _passed(test) {
		await this._attachVideo(test)
	}
}

module.exports = PlaywrightVideoAllure
