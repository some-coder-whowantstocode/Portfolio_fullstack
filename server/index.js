const express = require('express')
const app = express()
const port = 9310
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
require('dotenv').config()
const cors = require('cors')

const corsOptions ={
  origin: process.env.url,
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

let rtoken = process.env.OAUTH_REFRESH_TOKEN

let oAuth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENTID,
  process.env.OAUTH_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
)

oAuth2Client.setCredentials({
  refresh_token:rtoken
})

oAuth2Client.on('tokens',(tokens)=>{
  if(tokens.refresh_token)
  {
    rtoken = tokens.refresh_token
  }
})

async function sendMail(sender,subject,message){
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: rtoken
    }
  });

  const accessToken = await oAuth2Client.getAccessToken();
  transporter.set('oauth2.refresh', accessToken);

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    replyTo:sender,
    to: process.env.MAIL_USERNAME,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

app.use(express.json());

app.get('/',(req,res)=>{
res.send('This is for sending mail to me.')
})

app.post('/sendmail',async(req,res)=>{
  try{
    const {sender,subject,message} = req.body;
    await sendMail(sender,subject,message);
    console.log(req.body)
  
    res.status(200).send('email sent.');
  }catch(err)
  {
    res.status(501).send({err:err.message||err})
  }
 
})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
