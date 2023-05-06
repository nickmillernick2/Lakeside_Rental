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