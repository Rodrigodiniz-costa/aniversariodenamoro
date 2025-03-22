// Função alternar a classe "flipped" 
function flipCard() {
    document.querySelector(".flip-container").classList.toggle("flipped");
}

// clique na imagem central
document.querySelector(".flip-container").addEventListener("click", flipCard);

window.addEventListener("load", function () {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador:", error));
});