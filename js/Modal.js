export default class Modal {
    constructor(modal, fecharBotao, proximo, anterior) {
        this.modal = document.querySelector(modal);
        this.fecharBotao = document.querySelector(fecharBotao);
        this.proximo = document.querySelector(proximo);
        this.anterior = document.querySelector(anterior);
        this.imagem = this.modal.querySelector('#imagem-ampliada')

        this.inicializar()

    }

    inicializar() {
        this.fecharBotao.addEventListener('click', () => {
            this.modal.close();
        })

        this.proximo.addEventListener('click', () => {
            console.log('Próxima imagem');
        });

        this.anterior.addEventListener('click', () => {
            console.log('Imagem anterior');
        });
    }

    abrir(imagemSrc) {
        this.imagem.src = imagemSrc;
        this.modal.showModal();
    }

}