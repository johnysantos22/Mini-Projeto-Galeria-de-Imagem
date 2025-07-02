/*class Galeria {
    constructor(imagemSelector, botaoSelector) {
        this.imagemElement = document.querySelector(imagemSelector);
        this.botaoElement = document.querySelector(botaoSelector);
        this.init();
    }

    init() {
        this.botaoElement.addEventListener('click', () => {
            this.verMais();
        });
    }

    verMais() {
        if (this.imagemElement.style.display === 'none'
            || this.imagemElement.style.display === '') {
            this.imagemElement.style.display = 'block';
            this.botaoElement.textContent = 'Ver Menos';
        } else {
            this.imagemElement.style.display = 'none';
            this.botaoElement.textContent = 'Ver Mais';
        }
    }
}*/