const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server ONLY when running app.js directly
let server;
if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} else {
  // When running tests, export a server instance
  server = app.listen();
}

module.exports = server;