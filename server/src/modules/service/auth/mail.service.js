import { getActivationHtml, getActivationText } from '../../mails/activationMail/actiovationMail.js'
import sgMail from '@sendgrid/mail'

class MailService {
  async sendActivationMail (to, code) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: to,
      from: process.env.EMAIL_SENDER,
      subject: 'Код активации | Денежки',
      text: getActivationText(code),
      html: getActivationHtml(code)
    }

    try {
      await sgMail.send(msg)
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
}

export default new MailService()
