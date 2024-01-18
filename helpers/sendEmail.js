import { setApiKey, send } from "@sendgrid/mail";

const { SENDGRID_API_KEY } = process.env;

const sgMail = setApiKey(SENDGRID_API_KEY);

const msg = {
  to: "test@example.com",
  from: "maximgs@ukr.net", // Use the email address or domain you verified above
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
