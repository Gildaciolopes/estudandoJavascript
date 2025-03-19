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
