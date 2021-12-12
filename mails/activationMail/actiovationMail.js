const getActivationHtml = (code) => {
  return `
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns='http://www.w3.org/1999/xhtml'>

<head>
  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
  <title>Код активации | Денежки</title>
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
</head>

<body style='margin: 0; padding: 0;'>
  <table align='center' border='0' cellpadding='0' cellspacing='0' width='600' style='border-collapse: collapse;'>
    <tr>
      <td style='background:#ffffff;padding: 60px 0 30px 60px;vertical-align:middle' valign='middle' align='left'>
        <a href='${process.env.CLIENT_URL}' target='_blank'>
          <img src=' http://drive.google.com/uc?export=view&id=1ueXMFLlBlgQrt8nhzX1l5iK2nbhR2PLQ' alt='Денеджи' width='40' height='40' style='display: block;' />
        </a>
      </td>
    </tr>
    <tr>
      <td style='padding: 30px 0 30px 60px;'>
        <p style='margin-bottom:0;margin-top:0'><b>${code}</b> — ваш код для активации на <a
            href='${process.env.CLIENT_URL}' target='_blank'>${process.env.CLIENT_URL}</a></p>
      </td>
    </tr>
    <tr>
      <td align='center' style='padding: 30px 0 60px 0;'>
        <table>
          <tbody>
            <tr style='background:#ffcf26'>
              <td
                style='border:0 solid #ff5f0f;display:inline-block;text-align:center;font-family: Arial, Helvetica, sans-serif;font-size: 16px;line-height: 130%;font-weight: bold;text-decoration:none;color:#000000;'>
                <a href='${process.env.CLIENT_URL}/#/activate/${code}' target='_blank'
                  style='color: #000000;padding: 25px 68px;display:block;text-decoration:none;font-family: Arial, Helvetica, sans-serif;font-size: 16px;font-weight: bold;line-height: 130%;text-align: center;'>
                  <font color='#000000'>Активировать аккаунт</font>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>
  `
}

const getActivationText = (code) => {
  return `
${code} — ваш код для активации на ${process.env.CLIENT_URL}
    
Или перейдите по ссылке:
    
${process.env.CLIENT_URL}/#/activate/${code}
`
}

module.exports = { getActivationHtml, getActivationText }
