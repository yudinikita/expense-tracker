const nodemailer = require('nodemailer')
const { getActivationHtml, getActivationText } = require('../../mails/activationMail/actiovationMail')

class MailService {

  constructor () {
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    }

    this.transporter = nodemailer.createTransport(smtpConfig)
  }

  async sendActivationMail (to, code) {
    await this.transporter.sendMail({
      from: `"Никита Юдин" ${process.env.SMTP_USER}`,
      to,
      subject: 'Код активации | Денежки',
      text: getActivationText(code),
      html: getActivationHtml(code)
    }, (err) => err)
  }

}

module.exports = new MailService()
