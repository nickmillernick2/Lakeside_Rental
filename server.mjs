import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: publicPath });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
