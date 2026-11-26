import nodemailer from "nodemailer";

export const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "Your App <noreply@resolvedesk.com>",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    html: `<h2>Your OTP is ${otp}. It will expire in 10 minutes.<h2>`,
  };

  await transporter.sendMail(mailOptions);
};
