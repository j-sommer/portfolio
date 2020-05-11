/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const nodemailer = require("nodemailer");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/contact", async function (req, res) {
  const user = process.env.USER;
  const pass = process.env.PASS;

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
    tls: { ciphers: "SSLv3" },
  });

  const { name, email, message } = req.body;
  try {
    let info = await transporter.sendMail({
      from: user,
      to: user,
      subject: `[Contact Request] ${name} <${email}>`,
      text: `Message:\n${message}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.json({ success: "post call succeed!", url: req.url, body: req.body });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
