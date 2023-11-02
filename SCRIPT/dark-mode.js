let button = document.getElementById("chk");
let changeImg = document.getElementById("mudar-foto");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  caminho = location.href.replace('index.html', '');
  var img1 = caminho + "ASSETS/minha-carinha2.jpg";
  var img2 = caminho + "ASSETS/erick-light.webp";  

  console.log(changeImg.src)
  console.log(img1)
  console.log(caminho)


  if (changeImg.src === img1) {
    changeImg.setAttribute("src", img2);
  } else if (changeImg.src === img2) {
    changeImg.setAttribute("src", img1);
  }
});

//TROCA DE IMAGENS

/*function click(){
  var img1 = 'ASSETS/minha-carinha2.jpg';
  var img2 = 'ASSETS/hard-skills-svg/photoshop.svg';
  var element = document.getElementById('mudar-foto');
  if(element.src === img1){
    element.src = img2;
  }else if(element.src === img2){
    element.src = img1;
  }
}*/
