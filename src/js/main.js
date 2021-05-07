


function menuHeaderDrop() {
    const zaim = document.querySelector('.zaim');
    const credit = document.querySelector('.credit');
    const header = document.querySelector('.header_inner-tree');

    zaim.addEventListener('mouseover', (event) => {
        const target = event.target;
        header.classList.toggle('marginTop');
    });
    zaim.addEventListener('mouseout', (event) => {
        const target = event.target;
        header.classList.toggle('marginTop');
    });
    credit.addEventListener('mouseover', (event) => {
        const target = event.target;
        header.classList.toggle('marginTop');
    });
    credit.addEventListener('mouseout', (event) => {
        const target = event.target;
        header.classList.toggle('marginTop');
    });
}
menuHeaderDrop();

function mobMenuDrop() {
    const mobDropZaim = document.querySelector('.mobDropZaim');
    const mobDropCredit = document.querySelector('.mobDropCredit');
    const arrowSvgZaim = document.querySelector('#zaimArrow');
    const arrowSvgCredit = document.querySelector('#creditArrow');
    const menuMob = document.querySelector('.header_menu-mob');
    const headerMenu = document.querySelector('.header_mobile');
    const mobCredit = document.querySelector('.mobCredit');
    const mobZaim = document.querySelector('.mobZaim');

    menuMob.addEventListener('click', (event) => {
        const target = event.target;
        menuMob.classList.toggle('menuMobActive');
        headerMenu.classList.toggle('header_mobile-active');
    });
    mobZaim.addEventListener('click', (event) => {
        const target = event.target;
        mobDropZaim.classList.toggle('mobDropZaim-active');
        arrowSvgZaim.style.transform = "rotate(0deg)";
    });
    mobCredit.addEventListener('click', (event) => {
        const target = event.target;
        mobDropCredit.classList.toggle('mobDropCredit-active');
        arrowSvgCredit.style.transform = "rotate(0deg)";
    });
}
mobMenuDrop();



function selectCurrency() {
    const chekedArrows = document.querySelector('.conventor_select');
    const chekedArrow = document.querySelector('.select_arrowUp');
    const chekedArrowDown = document.querySelector('.select_arrowDown');
    const chekedArrowsEur = document.querySelector('.eur_select');
    const chekedArrowEur = document.querySelector('.select_arrowUp-eur');
    const chekedArrowDownEur = document.querySelector('.select_arrowDown-eur');
    chekedArrows.addEventListener('click', (event) => {
        const target = event.target;
        chekedArrow.classList.toggle('select_arrowChek');
        chekedArrowDown.classList.toggle('select_arrowChek');
    });
    chekedArrowsEur.addEventListener('click', (event) => {
        const target = event.target;
        chekedArrowEur.classList.toggle('select_arrowChek');
        chekedArrowDownEur.classList.toggle('select_arrowChek');
    });
}
selectCurrency();

const buttonConverter = document.querySelector('.conventor_btn');
const mobileConverter = document.querySelector('.mobile_converter');
const mobilClose = document.querySelector('.closeConvert')
buttonConverter.addEventListener('click', (event) => {
    const target = event.target;
    mobileConverter.classList.toggle('mobile_converter-active');
    buttonConverter.style.display = "none";
});
mobilClose.addEventListener('click', (event) => {
    const target = event.target;
    mobileConverter.classList.remove('mobile_converter-active');
    buttonConverter.style.display = "flex";
});



(function($) {
    $(function() {
    
      $('input, select').styler();
    
    });
    
    })(jQuery);
   