import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});