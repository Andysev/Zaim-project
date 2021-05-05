const zaim = document.querySelector('.zaim');
const credit = document.querySelector('.credit');

const header = document.querySelector('.header_inner-tree')

zaim.addEventListener('mouseover', (event) => {
    const target = event.target
    console.log(event.target)
    header.classList.toggle('marginTop')
});
zaim.addEventListener('mouseout', (event) => {
    const target = event.target
    console.log(event.target)
    header.classList.toggle('marginTop')
});
credit.addEventListener('mouseover', (event) => {
    const target = event.target
    console.log(event.target)
    header.classList.toggle('marginTop')
});
credit.addEventListener('mouseout', (event) => {
    const target = event.target
    console.log(event.target)
    header.classList.toggle('marginTop')
});
