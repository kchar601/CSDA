const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,  // set to true if using HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));


const transporter = nodemailer.createTransport({
  host: 'mail.smtp2go.com',
  port: 2525,
  secure: false,
  auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
  }
});


app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})

app.post('/api/sendMsg', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    const email = req.body.email;
    const name = req.body.name;
    const topic = req.body.topic;
    const message = req.body.msg;
    const html = `<p>Name: ${name}</p><p>Return email: ${email}</p><p>Topic: ${topic}</p><p>Message: ${message}</p>`;

    const mailOptions = {
      from: 'csdaUser@kchar.us',
      to: 'keithcsda@gmail.com',
      subject: 'CSDA Contact Form',
      html: html
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Message sent');
    res.json({status: "success"});
  } catch (error) {
    console.error(error);
    res.status(500).json({status: "error", message: "Failed to send message"});
  }
});