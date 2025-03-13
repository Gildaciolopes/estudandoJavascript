document.getElementById("imcForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(
    document.getElementById("altura").value.replace(",", ".")
  );

  if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  let imc = peso / (altura * altura);
  let classificacao = "";
  let cor = "green"; // Cor padrão para peso normal

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    cor = "orange";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
    cor = "green";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
    cor = "red";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
    cor = "red";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
    cor = "red";
  } else {
    classificacao = "Obesidade grau 3";
    cor = "darkred";
  }

  // Cria ou atualiza o parágrafo com o resultado
  let resultadoParagrafo = document.getElementById("imcResultado");

  if (!resultadoParagrafo) {
    resultadoParagrafo = document.createElement("p");
    resultadoParagrafo.id = "imcResultado";
    resultadoParagrafo.style.display = "none"; // Começa oculto
    let form = document.getElementById("imcForm");
    form.parentNode.insertBefore(resultadoParagrafo, form);
  }

  resultadoParagrafo.textContent = `Seu IMC é ${imc.toFixed(
    2
  )} - ${classificacao}`;
  resultadoParagrafo.style.color = cor;
  resultadoParagrafo.style.fontWeight = "bold";
  resultadoParagrafo.style.fontSize = "18px";
  resultadoParagrafo.style.display = "flex"; // Torna visível após o clique
  resultadoParagrafo.style.justifyContent = "center";
});
