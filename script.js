window.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.imgs img')
    const botao = document.getElementById('button')

    imagens.forEach((img, index) => {
        if (index >= 6) {
            img.classList.add('hidden');
        }
    })

    botao.addEventListener('click', () => {
        imagens.forEach((img, index) => {
            if (index >= 6) {
                img.classList.remove('hidden')
            }
        })

        botao.style.display = 'none';
    })
})
