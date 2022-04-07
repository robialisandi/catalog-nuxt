export default {
  renderJs() {
    'use strict';
    // Sticky header
    const sectionHeroEl = document.querySelector('.section-hero');
    console.log('section', sectionHeroEl);

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log('ent', ent.isIntersecting);
        console.log('kelas', sectionHeroEl.classList[0]);
        if (ent.isIntersecting === false) {
          document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove('sticky');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-60px',
      }
    );
    if (sectionHeroEl) obs.observe(sectionHeroEl);

    // mobile naviagtion
    const btnNavEl = document.querySelector('.btn-mobile-nav');
    const headerEl = document.querySelector('.header');

    btnNavEl.addEventListener('click', function () {
      headerEl.classList.toggle('nav-open');
    });

    const allLinks = document.querySelectorAll('a:link');

    allLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Close mobile naviagtion
        if (link.classList.contains('main-nav-link'))
          headerEl.classList.toggle('nav-open');
      });
    });

    // scroll animation
    const scrollElements = document.querySelectorAll('.js-scroll');
    const elementInView = (el, dividen = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividen
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
  },
};
