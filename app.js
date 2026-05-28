const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale",
);

window.addEventListener("scroll", revealElements);

function revealElements() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      element.classList.add("active");
    }
  });
}

revealElements();
