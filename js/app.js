window.onload = () => {
    document.querySelector('header .responsive .open-menu').onclick = () => {
        document.querySelector('header .responsive .open-menu').classList.toggle('opened')
        document.querySelector('header .responsive-links').classList.toggle('opened')
    }
}