const express = require('express');
const app = express();

// mostrar pasta public
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Rodando");
});
