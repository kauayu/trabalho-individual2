window.onload = () => {
    alert("Bem-vindo ao Projeto de Mecânica!");
};

// Adicionando um efeito de clique nas imagens
const images = document.querySelectorAll(".image-container img");

images.forEach(image => {
    image.addEventListener("click", () => {
        alert(`Você clicou na imagem: ${image.alt}`);
    });
});