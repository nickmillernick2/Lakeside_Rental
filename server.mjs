import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: publicPath });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


import mailgun from 'mailgun-js'

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})

app.post('/send-email', (req, res) => {
  const { customerName, customerEmail, customerPhone, userMessageSubject, 
    userMessage, arrivalDate, departureDate } = req.body

  const data = {
    from: `Your Name <you@${process.env.MAILGUN_DOMAIN}>`,
    to: 'lilmiller23@gmail.com',
    subject: 'New message from your website!',
    text: `
      Name: ${customerName}
      Email: ${customerEmail}
      Message: ${userMessage}
    `
  }

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error)
      res.send('error')
    } else {
      console.log(body)
      res.send('success')
    }
  })
})