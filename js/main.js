(function () {
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleActive(e) {
        e.preventDefault();
        const active = document.querySelector('.nav-link.active');
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active');        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
    }

    navLinks.forEach(link => link.addEventListener('click', toggleActive));
})();