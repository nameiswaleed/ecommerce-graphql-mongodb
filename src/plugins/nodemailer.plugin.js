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
    service: config.mailHost,
    auth: {
      user: config.mailUser, // generated ethereal user
      pass: config.mailPassword, // generated ethereal password
    },
  });
  try {
    const info = await transporter.sendMail({
      from: config.siteName, // sender address
      to,
      subject,
      text,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = sendEmail;
