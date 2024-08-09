document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed', {
        strings: ["Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 25,
        loop: false,
        onComplete: function() {
            
            var cursor = document.querySelector('.typed-cursor');
            if (cursor) {
                cursor.style.display = 'none';
            }
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submitted Successfully');
});
