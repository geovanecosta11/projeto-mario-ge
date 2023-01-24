console.log('mostrar o document.',document);
console.log(document.querySelector(`.botao-trailer`)) ; 


const botaoTrailer = document.querySelector(`.botao-trailer`);//ESTAMOS PEGANDO O BOTAO NO HTML E GUARDANDO EM UMA VARIAVEL , OU SEJA O BOTAO ESTA QGURADADO QUANDO PRECISAR//
const modal = document.querySelector(".modal");
const botaofechamodal = document.querySelector(".fechar-modal"); 
const video = document.getElementById("video"); 
const linkvideo = video.src;





botaoTrailer.addEventListener("click", () => {
   modal.classList.add("aberto"); //aqui estou add uma classe que nao foi feita no html
   video.setAttribute("src", linkvideo);
}); // adicionar um evento de escuta ou ouvinte //quando o botao dor clicado executar uma ação//função de seta ()=>{

botaofechamodal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});