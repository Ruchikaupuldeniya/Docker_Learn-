// import the Express framework
const express = require('express');
const app = express();
const PORT = 3000;

// one endpoint: respond on the home route
app.get('/', (req, res) => {
  res.send('Hello from a container! 🐳');
});

// start listening for requests
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
