// animation
var typed = new Typed('.typing', {
    strings: ['', 'Marketing Executive', 'Content Marketing'],
    typeSpeed: 80,
    BackSpeed: 0,
    loop: true,
    fadeOut: true
})

// category
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav_list');
const navLength = navList.length;

const allSection = document.querySelectorAll('.section');
const sectionLength = allSection.length;

const navToggler = document.querySelector('.nav_toggler');
const cate = document.querySelector('.category');

const readMore = document.querySelector('.read-more');


for (let i = 0; i < navLength; i++) {
    const navItem = navList[i].querySelector('a');
    navItem.addEventListener( 'click', () => {
        removeBackSection()
        for (let j = 0; j < navLength; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSection(j)
                // allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        navItem.classList.add('active');
        showSection(navItem);
        // if (window.innerWidth < 1200) {
        //     cateSectionToggler();
        // }
    })
}

function removeBackSection() {
    for (let i = 0; i < sectionLength; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function addBackSection(num) {
    allSection[num].classList.add('back-section');
}

function showSection(element) {
    for (let i = 0; i < sectionLength; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
    for (let i = 0; i < navLength; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

navToggler.addEventListener('click', () => {
    categorySection();
})

function categorySection() {
    cate.classList.toggle('open');
    navToggler.classList.toggle('open');

    for (let i = 0; i < sectionLength; i++) {
        allSection[i].classList.toggle('open');
    }
}

readMore.addEventListener('click', () => {
    const sectionIndex = readMore.getAttribute('data-section-index');
    // console.log(sectionIndex);
    showSection(readMore);
    updateNav(readMore);
    removeBackSection();
    addBackSection(sectionIndex);
})