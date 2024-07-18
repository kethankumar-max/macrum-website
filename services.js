function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});



window.addEventListener('scroll', function() {
    var h2Elements = document.querySelectorAll('#services h2.animate');
    var windowHeight = window.innerHeight;

    h2Elements.forEach(function(h2) {
        var h2Position = h2.getBoundingClientRect().top;

        if (h2Position < windowHeight / 1.5) {
            h2.classList.add('visible');
        } else {
            h2.classList.remove('visible');
        }
    });
});
