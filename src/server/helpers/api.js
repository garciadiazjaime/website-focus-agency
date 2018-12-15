const express = require('express');
/*eslint-disable */
const router = express.Router();
/*eslint-enable */
const conf = require('../../../config.js');
const sendgrid = require('sendgrid')(conf.get('sendgrid'));


router.post('/send_email', (req, res) => {
  const fromname = req.body.fromname;
  const replyto = req.body.replyto;
  const subject = req.body.subject;
  const html = req.body.html;

  const email = new sendgrid.Email({
    to: conf.get('email'),
    from: conf.get('email'),
    fromname,
    replyto,
    subject,
    bcc: ['info@mintitmedia.com'],
    html,
  });
  console.log('email', email);
  sendgrid.send(email, (err) => {
    console.log('sendgrid.send', err);
    let response = true;
    if (err) {
      console.error(err);
      response = false;
    }
    res.send({
      status: response,
    });
  });
});

export default router;
