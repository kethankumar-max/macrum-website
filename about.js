function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-left, .animate-right');

    function checkVisibility() {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check
});
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.four');
    
    function onScroll() {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if(sectionPosition < screenPosition) {
            section.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', onScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
