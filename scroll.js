// scroll.js

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.main_nav_item a');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            var href = this.getAttribute('href');

            // Check if the link is to an external page
            if (href.startsWith('http') || href.startsWith('www') || href.endsWith('.html')) {
                // Do nothing and let the default behavior occur
                return;
            }

            // Prevent the default behavior for internal links
            e.preventDefault();
            var targetId = href.substring(1);
            var target = document.getElementById(targetId);
            var headerHeight = document.querySelector('.main_header').offsetHeight;
            var targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
});
