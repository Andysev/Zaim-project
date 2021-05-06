const zaim = document.querySelector('.zaim');
const credit = document.querySelector('.credit');
const mobZaim = document.querySelector('.mobZaim');
const mobCredit = document.querySelector('.mobCredit');
const menuMob = document.querySelector('.header_menu-mob');
const headerMenu = document.querySelector('.header_mobile');
const header = document.querySelector('.header_inner-tree');
const mobDropZaim = document.querySelector('.mobDropZaim');
const mobDropCredit = document.querySelector('.mobDropCredit');
const arrowSvgZaim = document.querySelector('#zaimArrow');
const arrowSvgCredit = document.querySelector('#creditArrow');

zaim.addEventListener('mouseover', (event) => {
    const target = event.target
    header.classList.toggle('marginTop')
});
zaim.addEventListener('mouseout', (event) => {
    const target = event.target
    header.classList.toggle('marginTop')
});
credit.addEventListener('mouseover', (event) => {
    const target = event.target
    header.classList.toggle('marginTop')
});
credit.addEventListener('mouseout', (event) => {
    const target = event.target
    header.classList.toggle('marginTop')
});
menuMob.addEventListener('click', (event) => {
    const target = event.target
    menuMob.classList.toggle('menuMobActive')
    headerMenu.classList.toggle('header_mobile-active')
});

mobZaim.addEventListener('click', (event) => {
    const target = event.target
    mobDropZaim.classList.toggle('mobDropZaim-active')
    arrowSvgZaim.style.transform = "rotate(0deg)";
    
});
mobCredit.addEventListener('click', (event) => {
    const target = event.target
    mobDropCredit.classList.toggle('mobDropCredit-active')
    arrowSvgCredit.style.transform = "rotate(0deg)"
});