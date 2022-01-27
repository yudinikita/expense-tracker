import sgMail from '@sendgrid/mail'
import constants from '../../constants/constants.js'
import { getActivationHtml, getActivationText } from '../../mails/activationMail/actiovationMail.js'

export const getActivationMsg = (to: string, code: string): sgMail.MailDataRequired => {
  const EMAIL_SENDER = process.env['EMAIL_SENDER'] ?? ''
  const SUBJECT = constants.MAIL.SUBJECT

  const text = getActivationText(code)
  const html = getActivationHtml(code)

  return {
    to,
    from: EMAIL_SENDER,
    subject: SUBJECT,
    text,
    html
  }
}
