/**
 * This is the main javascript file for the application.
 * This code is free to use, modify, and redistribute.
 * Please credit Stanley Masinde for the original work.
 * If you redistribute this code, please add a link to the original source (Stanley Masinde).
 * @author Stanley Masinde
 * @date 2021-12-23
 * @link
 */
const sections = {
    "home": {
        "title": "Home | Stanley Masinde",
    },
    "skills-section": {
        "title": "Skills | Stanley Masinde",
    },
    "about-section": {
        "title": "About | Stanley Masinde",
    },
    "projects-section": {
        "title": "Projects | Stanley Masinde",
    },
    "contact-section": {
        "title": "Contact | Stanley Masinde",
    },
};

window.addEventListener('load', function () {
    const sectionLinks = document.querySelectorAll('#section-link');
    const backToTop = document.querySelector('#back-to-top');
    const copyrightYear = document.querySelector('#copyright-year');

    // Set the copyright year
    let currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = currentYear;

    sectionLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault()

            const href = link.getAttribute('href');
            const section = document.querySelector(href);
            sectionLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            link.classList.add('active');

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            document.title = sections[href.substring(1)].title;
        })
    })

    backToTop.addEventListener('click', function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        sectionLinks.forEach(function (link) {
            if (link.getAttribute('href') === window.location.hash) {
                link.classList.add('active');
            }
        });
    }
})