//footer
const titles = Array.from(document.querySelectorAll('.footer__title'));
let viewportWidth;


function goAccordion (){
    
    viewportWidth = document.documentElement.clientWidth;
    //console.log(viewportWidth);
    if (viewportWidth <= 576) {
        titles.forEach(elem => {
            if (!elem.classList.contains('footer__subscribe')) {
                elem.nextElementSibling.classList.add('_hidden');
                elem.addEventListener('click', () => {
                    elem.nextElementSibling.classList.toggle('_hidden');
                })
            }
        })
    } else
    if(viewportWidth > 576){
        titles.forEach(elem=>{
            elem.nextElementSibling.classList.remove('_hidden');
        })
    }
}
window.addEventListener('resize', ()=>goAccordion());
window.onload = goAccordion;