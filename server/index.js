const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticDir = path.resolve(__dirname, '../build');
const indexFile = path.resolve(staticDir, 'index.html');
app.use(express.static(staticDir));

// send all request to `/`
app.get('*', (req, res) => {
  res.sendFile(indexFile);
});

app.listen(port, () => {
  console.log(`Frontend Server listening at http://localhost:${port}`);
});
