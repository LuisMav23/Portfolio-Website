const animated = document.querySelector(".animated-element");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animated.classList.add("visible");
            observer.unobserve(animated);
        }
    });
});

observer.observe(animated);

function openCalendly() {
    window.open('https://calendly.com/gabrielluismaverick/30min', '_blank');
}

function downloadResume() {
    var link = document.createElement('a');
    link.href = './assets/GABRIEL-CV.pdf';
    link.download = 'Gabriel-CV.pdf'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openGithub() {
    window.open('https://github.com/LuisMav23', '_blank');
}
