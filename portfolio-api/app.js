const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sgMail = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

// sgMail.setApiKey(
//   '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'
// );
// const msg = {
//   to: 'calebvautier@gmail.com',
//   from: 'calebvautier@hotmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api', (req, res, next) => {
  res.send('API status: Running');
});

app.post('/api/email', (req, res, next) => {
  sgMail.setApiKey(
    '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'
  );
  const msg = {
    to: 'calebvautier@gmail.com',
    from: req.body.email,
    subject: 'Portfolio Contact',
    text: req.body.message,
  };

  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })

    .catch((err) => {
      console.log('error: ', err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(3030, '0.0.0.0');
