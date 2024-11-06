const express = require('express')
const { sender, templateMaker, CUSTOM_API_TOKEN } = require('./mailer')
const morgan = require('morgan')

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())


app.get('/', async (req, res) => {
    res.status(200).json({ msg: 'Yep! Server is up!' })
})

app.post('/', async (req, res) => {
    const body = req.body; 
    if (req.get('customapitoken') != CUSTOM_API_TOKEN) {
      return res.status(400).json({ status: 400, msg: 'Please provide correct customapitoken' })
    }
    if (!body.from || !body.to) {
      return c.status(400).json({ status: 400, msg: 'Please provide from/to in mail' })
    }
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
    if (!emailRegex.test(body.from) || !emailRegex.test(body.to)){
      return res.status(400).json({ status: 400, msg: 'Please provide valid from/to email address' })
    }

    console.log(body);
    await sender.sendMail({
        from: body.from,
        to: body.to,
        subject: body.subject,
        html: templateMaker({ 
            from: body.from, 
            to: body.to, 
            subject: body.subject, 
            text: body.text
        })
    });

    res.status(200).json({ msg: 'Email sent successfully!' })
})

const PORT = 8787
app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})