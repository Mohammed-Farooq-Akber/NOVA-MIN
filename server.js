const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('testCookie', 'HelloCookieWorld');
  res.send('Cookie has been set!');
});

app.get('/read', (req, res) => {
  res.send(`Cookies received: ${JSON.stringify(req.cookies)}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});