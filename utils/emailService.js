import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  console.log('GMAIL_CLIENT_ID:', process.env.GMAIL_CLIENT_ID ? 'Set' : 'Not set');
  console.log('GMAIL_CLIENT_SECRET:', process.env.GMAIL_CLIENT_SECRET ? 'Set' : 'Not set');
  console.log('GMAIL_REFRESH_TOKEN:', process.env.GMAIL_REFRESH_TOKEN ? 'Set' : 'Not set');
  console.log('GMAIL_USER:', process.env.GMAIL_USER);

  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  if (!process.env.GMAIL_REFRESH_TOKEN) {
    throw new Error('GMAIL_REFRESH_TOKEN is not set in environment variables');
  }

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN
  });

  try {
    const accessToken = await oauth2Client.getAccessToken();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        accessToken: accessToken.token,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN
      }
    });

    return transporter;
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};

export const sendEmail = async (to, subject, text) => {
  try {
    const transporter = await createTransporter();
    const info = await transporter.sendMail({
      from: '"Gabe" <letsdomoretogether@gmail.com>',
      to: to,
      subject: subject,
      text: text
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};