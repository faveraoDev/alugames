let contadorJogosAlugados = 0;

function imprimeJogosAlugados() {
    console.clear();
    console.log(`Número de jogos alugados: ${contadorJogosAlugados}`);
}

// Altera o status dos jogos (alugado ou disponível)
function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img");
    let botao = game.querySelector(".dashboard__item__button");
    let nomeJogo = game.querySelector(".dashboard__item__name").textContent;
    

    if (imagem.classList.contains("dashboard__item__img--rented")) { 
       
        //Confirma a devolução do jogo
        if (confirm(`Você está prestes a devolver o jogo "${nomeJogo}"!`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = 'Alugar';
            contadorJogosAlugados--;
        } 

    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = 'Devolver';
        contadorJogosAlugados++;
    }

    imprimeJogosAlugados();
}

// Verifica quais jogos já estão alugados ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    contadorJogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    imprimeJogosAlugados();
});