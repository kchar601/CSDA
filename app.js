const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
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


// const transporter = nodemailer.createTransport({
//   host: 'mail.smtp2go.com',
//   port: 2525,
//   secure: false,
//   auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS
//   }
// });


app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})