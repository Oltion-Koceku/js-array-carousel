const imgs = [
"assets/img/01.webp",
"assets/img/02.webp",
"assets/img/03.webp",
"assets/img/04.webp",
"assets/img/05.webp",
]

let contatore = 2;
const colonna1 = document.querySelector(".colonna-1")
const colonna2 = document.querySelector(".colonna-2")
const buttonSu = document.querySelector(".button-su")
const buttonGiu = document.querySelector(".button-giu")

for (let i = 0; i < imgs.length; i++) {
  const imgL = imgs[i];
  console.log(imgL);
  colonna1.innerHTML += `<img src="${imgL}" alt="" class="img-ol d-none">`
}

const imgAll = document.getElementsByClassName("img-ol");

imgAll[contatore].classList.remove("d-none")

buttonSu.addEventListener("click", function(){
  imgAll[contatore].classList.add("d-none")
  contatore--;
  imgAll[contatore].classList.remove("d-none")

  if(contatore === 0){
    buttonSu.classList.add("d-none")
  }else if(contatore === imgs.length - 2){
    buttonGiu.classList.remove("d-none")
  }
})

buttonGiu.addEventListener("click", function(){
  imgAll[contatore].classList.add("d-none")
  contatore++;
  imgAll[contatore].classList.remove("d-none")

  if(contatore === imgs.length - 1){
    buttonGiu.classList.add("d-none")
  }else if(contatore === 1){
    buttonSu.classList.remove("d-none")
  }
  
})



