const button = document.querySelectorAll(".scrollBtn");
const targetSection = document.querySelector(".plan");
button.forEach((el) => {
  el.addEventListener("click", () => {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
