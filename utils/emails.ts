import * as nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

type authType = {
	user: string | undefined
	pass: string | undefined
}

type SendEmailParams = {
	port?: number
	service?: 'gmail' | 'outlook' | 'hotmail'
	auth?: authType
	destination: string
	subject: string
	content: string
	attachmentPath?: string
}

const serviceMap = {
	gmail: {
		port: 465,
		host: 'smtp.gmail.com',
	},
	outlook: {
		port: 587,
		host: 'smtp.office365.com',
	},
	hotmail: {
		port: 587,
		host: 'smtp.live.com',
	},
}

export const sendEmail = ({
	service = 'outlook',
	auth = {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
	destination,
	subject,
	content,
	attachmentPath,
}: SendEmailParams) => {
	const transporter = nodemailer.createTransport({
		host: serviceMap[service].host,
		port: serviceMap[service].port,
		secure: false,
		auth,
	})

	const mailOptions = {
		from: process.env.EMAIL,
		to: destination,
		subject,
		html: content,
		attachments: [
			{
				path: attachmentPath,
			},
		],
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error)
		} else {
			console.log(`Email sent: ${info.response}`)
		}
	})
}
