const express = require('express');
const app = express();
const port = 9310;
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: process.env.URL,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASS,
  },
});

async function sendmail(sub, text, email) {
  console.log(email,sub,text);
  const info = await transporter.sendMail({
    // from: email,
    to: process.env.MAIL_TO,
    subject: `you got the mail from ${email} about this : ${sub}`,
    text: text,
  });
  console.log("Message sent: %s", info.messageId);
}

app.get('/', (req, res) => {
  res.send('This is for sending mail to me.');
});

app.post('/sendmail', async (req, res) => {
  try {
    const { sender, subject, message } = req.body;
    if (!sender || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender) ) 
      { 
        return res.status(400).send({ error: 'Invalid data' }); 
      }
    await sendmail(subject, message, sender);
    res.status(200).send('Email sent.');
  } catch (err) {
    console.log(err);
    res.status(501).send({ err: err.message || err });
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
