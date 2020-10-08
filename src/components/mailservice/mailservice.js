const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')


const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  debug: true, // show debug output
  //logger: true, // log information in console

  auth: {
    user: "udhayak4251office@gmail.com", //replace with the email address
    pass: "Udhaya@98841" //replace with the password
  }
});
app.post('/api/sendEmail', (req, res) => {
  var name = req.body.name
  var email = 'udhayajan@gmail.com'
  var message = req.body.message
  var content = `Name: ${name}\nEmail: ${email}\nmessage: ${message} `
  var mail = {
    from: name,
    to: email,
    subject: req.body.subject,
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

app.listen(3002, () => {
  console.log(`Example app listening at http://localhost:${3002}`)
})


