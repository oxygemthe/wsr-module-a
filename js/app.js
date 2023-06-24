window.onload = () => {
    document.querySelector('header .responsive .open-menu').onclick = () => {
        document.querySelector('header .responsive .open-menu').classList.toggle('opened')
    }
}