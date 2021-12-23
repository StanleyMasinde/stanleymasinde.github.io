/**
 * This is the main javascript file for the application.
 * This code is free to use, modify, and redistribute.
 * Please credit Stanley Masinde for the original work.
 * If you redistribute this code, please add a link to the original source (Stanley Masinde).
 * @author Stanley Masinde
 * @date 2021-12-23
 * @link
 */
window.addEventListener('load', function () {
    const sectionLinks = document.querySelectorAll('#section-link');
    const backToTop = document.querySelector('#back-to-top');

    sectionLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            console.log(event.target.dataset.section);
            event.preventDefault()

            const href = link.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            document.title = href.substring(1);
        })
    })

    backToTop.addEventListener('click', function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})