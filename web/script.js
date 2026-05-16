const soundCopy = {
  techno: "Deep pressure, industrial pulse, late-room hypnosis.",
  psytrance: "Squelch spirals, elastic bass, ultraviolet acceleration.",
  disco: "Chrome warmth, human swing, mirror-ball voltage.",
  groovy: "Low-slung rhythm, body logic, smiles in the smoke."
};

const tabs = document.querySelectorAll(".sound-tab");
const label = document.querySelector("#sound-label");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    label.textContent = soundCopy[tab.dataset.sound];
  });
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
});
