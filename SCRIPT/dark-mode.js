let button = document.getElementById("chk");
let changeImg = document.getElementById("mudar-foto");

console.log(location.origin);
console.log(changeImg.src);
console.log(location.origin + changeImg.src);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  var img1 = "Portfolio/ASSETS/minha-carinha2.jpg";
  var img2 = "Portfolio/ASSETS/erick-light.webp";

  console.log(img1);

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
