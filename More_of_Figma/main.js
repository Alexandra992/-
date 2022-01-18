//footer
const listTitles = Array.from(document.querySelectorAll('.list-title'));
const viewportWidth = document.documentElement.clientWidth;


listTitles.forEach(elem => {
    if (viewportWidth <= 768) {
        elem.nextElementSibling.classList.add('_hidden');
        elem.style.cursor = 'pointer';
        elem.style.marginBottom = '20px';
        elem.addEventListener('click', () => {
            elem.nextElementSibling.classList.toggle('_hidden')
        })
    }
})