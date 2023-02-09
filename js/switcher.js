// toggle switcher

const styleSwitcherToggle = document.querySelector('.switcher_toggler');
const openStyleSwitcher = document.querySelector('.style_switcher');

styleSwitcherToggle.addEventListener('click', () => {
    openStyleSwitcher.classList.toggle('open')
});

// hide style switcher on scroll
window.addEventListener('scroll', () => {
    if (openStyleSwitcher.classList.contains('open')) {
        openStyleSwitcher.classList.remove('open')
    }
});

// theme colors
const alternateStyles = document.querySelectorAll('.alternate');
function setActiveStyle (color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        }
        else {
            style.setAttribute('disabled', 'true')
        }
    })
};

// theme light and dark mode
const themeDayNight = document.querySelector('.day-night');
themeDayNight.addEventListener('click', () => {
    themeDayNight.querySelector('i').classList.toggle('fa-sun');
    themeDayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        themeDayNight.querySelector('i').classList.add('fa-sun');
    }
    else {
        themeDayNight.querySelector('i').classList.add('fa-moon');
    }
})