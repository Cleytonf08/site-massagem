const express = require('express');
const app = express();

// rota básica
app.get('/', (req, res) => {
  res.send("Site rodando 🚀");
});

// porta correta pro Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Rodando");
});
