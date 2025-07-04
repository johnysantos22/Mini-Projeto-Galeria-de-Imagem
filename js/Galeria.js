export default class Galeria {
    constructor(containerSelector, botaoSelector) {
        this.container = document.querySelector(containerSelector);
        this.imagensEscondidas = this.container.querySelectorAll('.hidden');
        this.botao = document.querySelector(botaoSelector);

        this.init();
    }

    init() {
        this.botao.addEventListener('click', () => this.mostrarTodas());
    }

    mostrarTodas() {
        this.imagensEscondidas.forEach(img => img.classList.remove('hidden'));
        this.botao.style.display = 'none';
    }
}