const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'julong@blockodyssey.io',
    pass: 'qq111111!',
  }
});

let mailOptions = {
  from: '"스캐너스" <julong@blockodyssey.io>',
  to: 'julong1988@naver.com',
  subject: 'Hello22',
  html: '<b>Hello world?</b>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log(info)
  console.log('Message sent: %s', info.messageId);
});