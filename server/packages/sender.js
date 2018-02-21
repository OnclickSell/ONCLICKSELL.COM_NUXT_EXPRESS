var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aliakbar.su@gmail.com',
    pass: 'AR_0785306898'
  }
});

// let mailOptions = {
//   from: 'aliakbar.su@gmail.com',
//   to: 'al.su@hotmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



module.exports = {
    service: 'gmail',
    user: 'aliakbar.su@gmail.com',
    pass: 'AR_0785306898',
    mailOptions: {
        from: 'aliakbar.su@gmail.com',
        to: 'al.su@hotmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    },
    send: function(html, recepient) {
        transporter.sendMail(this.mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
    }
}