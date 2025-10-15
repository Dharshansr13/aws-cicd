const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send("🌟 Dharshan, good times are soon — powered by Docker & AWS!");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
