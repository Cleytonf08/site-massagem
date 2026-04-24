const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando"));
app.get('/agendamentos', (req, res) => {
  db.all("SELECT * FROM agendamentos", [], (err, rows) => {
    res.json(rows);
  });
});