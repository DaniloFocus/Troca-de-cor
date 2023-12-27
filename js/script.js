document.addEventListener("DOMContentLoaded", function () {
    // Espera o DOM estar completamente carregado antes de executar o código

    // Seletor para o parágrafo
    var paragrafo = document.querySelector(".cor-alterada");

    // Seletor para o botão
    var botaoMudaCor = document.querySelector(".button-color");

    // Função para gerar uma cor de fundo aleatória
    function gerarCorFundoAleatoria() {
        var letrasHex = "0123456789ABCDEF";
        var cor = "#";
        for (var i = 0; i < 6; i++) {
            cor += letrasHex[Math.floor(Math.random() * 16)];
        }
        return cor;
    }

    // Função para alterar a cor de fundo do parágrafo
    function alterarCorFundoParagrafo() {
        var novaCorFundo = gerarCorFundoAleatoria();
        paragrafo.style.backgroundColor = novaCorFundo;
    }

    // Adiciona um ouvinte de evento ao botão para chamar a função quando clicado
    botaoMudaCor.addEventListener("click", alterarCorFundoParagrafo);
});