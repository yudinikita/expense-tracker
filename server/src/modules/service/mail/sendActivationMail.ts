import sgMail from '@sendgrid/mail'
import { getActivationMsg } from './getActivationMsg.js'

export const sendActivationMail = async (to: string, code: string): Promise<void> => {
  const API_KEY = process.env['SENDGRID_API_KEY'] ?? ''

  sgMail.setApiKey(API_KEY)

  try {
    const msg = getActivationMsg(to, code)
    await sgMail.send(msg)
  } catch (error) {
    console.error(error)

    if (error.response != null) {
      console.error(error.response.body)
    }
  }
}
