document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".scroll-btn").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const container = document.getElementById(targetId);

      if (!container) return;

      const scrollAmount = 300;
      if (button.classList.contains("left")) {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });
  });
});
