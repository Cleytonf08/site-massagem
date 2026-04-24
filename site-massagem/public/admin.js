document.getElementById('formFoto').addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(e.target);

  fetch('/upload', {
    method: 'POST',
    body: data
  }).then(() => alert("Foto enviada"));
});

// listar agenda
fetch('/agendamentos')
  .then(res => res.json())
  .then(lista => {
    lista.forEach(a => {
      let li = document.createElement('li');
      li.innerText = ${a.data} - ${a.horario};
      document.getElementById('lista').appendChild(li);
    });
  });