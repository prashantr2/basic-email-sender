const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
    }
})

const templateMaker = ({ from, to, subject, text }) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 0 0 8px 8px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
    }
    .cta-button {
      display: inline-block;
      padding: 12px 20px;
      background-color: #007BFF;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
      font-weight: bold;
    }
    .cta-button:hover {
      background-color: #0056b3;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #777;
    }
    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
    .from-box {
      background-color: #333;
      color: white;
      padding: 2px 5px;
      margin-bottom: 5px;
      font-weight: 800;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>${subject}</h1>
    </div>
    <div class="content">
      <p class="from-box">From (portfolio): ${from},</p>
      <hr/>
      <p>${text}</p>
    </div>
  </div>
</body>
</html>
`  
}

module.exports = { 
    sender, 
    templateMaker, 
    CUSTOM_API_TOKEN: process.env.CUSTOM_API_TOKEN,
    PORT: process.env.PORT || 3000
};