import emailjs from "emailjs-com";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const userId = process.env.REACT_APP_EMAILJS_USER_ID;

const emailSender = async (name, email, recCode) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { name, email, recCode },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");

      return true;
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
    
    return false;
  }
};

export default emailSender;
