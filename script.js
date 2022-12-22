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