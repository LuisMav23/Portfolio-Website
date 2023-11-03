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