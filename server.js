const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
  res.cookie('hello', 'world');
  res.send('Hello NOVA-MIN!');
});
app.get('/check', (req, res) => {
  res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`NOVA-MIN running on port ${PORT}`));