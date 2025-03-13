function meuEscopo() {
  const formulario = document.querySelector(".formulario");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = formulario.querySelector(".nome").value;
    const sobrenome = formulario.querySelector(".sobrenome").value;
    const peso = formulario.querySelector(".peso").value;
    const altura = formulario.querySelector(".altura").value;

    pessoas.push({
      nome,
      sobrenome,
      peso,
      altura,
    });

    resultado.innerHTML += `<p>${nome} ${sobrenome} - ${peso}kg, ${altura}m</p>`;

    formulario.reset();
  }

  formulario.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
