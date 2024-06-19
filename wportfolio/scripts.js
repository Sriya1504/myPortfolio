document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
