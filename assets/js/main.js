const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);

for (let p of ps) {
  p.style.backgroundColor = estilosBody.backgroundColor;
  p.style.color = "white";
}
