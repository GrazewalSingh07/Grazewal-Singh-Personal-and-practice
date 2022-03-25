const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
module.exports=nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "8527e90e90cf12", // generated ethereal user
    pass: "6622c5c1788e94", // generated ethereal password
  },
});