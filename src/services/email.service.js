const { mailSender } = require('../plugins');
const config = require('../config');

const sendSignUpMail = async ({ name, email }) => {
  try {
    const res = await mailSender({
      subject: 'Account Created: Welcome to ' + config.siteName,
      text: `Hello ${name} \n
You registered an account on ${config.siteName}, before being able to use your account you need to verify! \n
Kind Regards, ${config.siteName}`,
      to: email,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendSignUpMail,
};
