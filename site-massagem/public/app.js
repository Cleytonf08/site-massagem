let config;

fetch('/config')
  .then(res => res.json())
  .then(c => {
    config = c;
    document.getElementById('logo').innerText = c.siteNome;
    document.getElementById('title').innerText = c.siteNome;
  });

// fotos
fetch('/fotos')
  .then(res => res.json())
  .then(fotos => {
    fotos.forEach(f => {
      let img = document.createElement('img');
      img.src = '/uploads/' + f.caminho;
      document.getElementById('galeria').appendChild(img);
    });
  });

function abrirWhats() {
  window.open(https://wa.me/${config.whatsapp});
}

function scrollToAgenda() {
  document.getElementById('agenda').scrollIntoView();
}

function agendar() {
  const data = dataInput.value;
  const hora = horaInput.value;

  fetch('/agendar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data, horario: hora })
  })
  .then(res => {
    if (!res.ok) throw new Error();

    const msg = Agendamento:\nData: ${data}\nHora: ${hora};
    window.open(https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)});
  })
  .catch(() => alert("Horário ocupado"));
}