const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "utkarshcomeon@gmail.com",
  from: "mayank.singh081997@gmail.com",
  subject: "Some Subject",
  text: "Some Text",
  html: "Smart India Hackathon 2019 !!!"
};

sgMail.send(msg);
