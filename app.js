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

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (prevBtn && nextBtn && track) {
  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -340, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 340, behavior: "smooth" });
  });
}

function createFlash() {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = Math.random() * 100 + "%";
  flash.style.left = Math.random() * 100 + "%";
  flash.style.width = Math.random() * 8 + 3 + "px";
  flash.style.height = flash.style.width;
  flash.style.background = "white";
  flash.style.borderRadius = "50%";
  flash.style.pointerEvents = "none";
  flash.style.zIndex = "9999";
  flash.style.opacity = Math.random() * 0.8 + 0.5;
  flash.style.boxShadow = "0 0 10px 3px rgba(255,255,255,0.8)";
  flash.style.animation = "flashFade 0.4s ease-out forwards";

  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);
}

setInterval(() => {
  if (Math.random() > 0.4) {
    // 60% probabilidad
    createFlash();
  }
}, 800); // cada 0.8 segundos
