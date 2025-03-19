const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function createLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    createTarefa(inputTarefa.value);
  }
});

function clearInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function createDeleteButton(li) {
  li.innerText += " ";
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Apagar";
  btnDelete.setAttribute("class", "apagar");
  li.appendChild(btnDelete);
}

function createTarefa(textoTarefa) {
  const li = createLi();
  li.innerText = textoTarefa;
  tarefas.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTarefas();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  createTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    saveTarefas();
  }
});

function saveTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaText = tarefa.innerText;
    tarefaText = tarefaText.replace("Apagar", "").trim();
    listaTarefas.push(tarefaText);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}
