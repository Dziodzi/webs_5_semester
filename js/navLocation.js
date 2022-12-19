function handleLocationChange(location, color) {
    let menu = document.querySelectorAll('body header nav a');

    for (let i = 0; i < menu.length; i++) {
        if (location === menu[i].href) {
            menu[i].style.color = color;
        }
    }
}