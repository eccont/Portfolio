let button = document.getElementById("chk");
let changeImg = document.getElementById("mudar-foto");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  caminho = location.href.replace("index.html", "");
  var img1 = caminho + "ASSETS/minha-carinha2.jpg";
  var img2 = caminho + "ASSETS/erick-light.webp";

  if (changeImg.src === img1) {
    changeImg.setAttribute("src", img2);
  } else if (changeImg.src === img2) {
    changeImg.setAttribute("src", img1);
  }
});
