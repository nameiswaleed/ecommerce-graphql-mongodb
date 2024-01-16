const nodemailer = require('nodemailer');
const validator = require('validator');
const path = require('path');
const config = require('../config');
/**
 *
 * @returns {Promise<nodemailer.TestAccount>}
 */

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async ({ to, subject, text }) => {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  try {
    console.log(testAccount.smtp);
    console.log({
      to,
      subject,
      text,
      siteName: config.siteName,
    });
    // send mail with defined transport object
    // const info = await transporter.sendMail({
    //   from: config.siteName, // sender address
    //   to, // list of receivers
    //   subject, // Subject line
    //   text, // plain text body
    // });

    // console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = sendEmail;
