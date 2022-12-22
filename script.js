const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    // click touch celular
    if (event.type === 'touchstart') {
        event.preventDefault()
    }

    //Adicionar classe ativo 
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

    // Acecibilidade
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Criação de animação da barra de rolagem do scroll
function navegacaoAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {

        const metadeWindow = window.innerHeight * 0.8

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - metadeWindow

                if (sectionTop < 0) {
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}
navegacaoAnimacaoScroll()