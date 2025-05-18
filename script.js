document.addEventListener("DOMContentLoaded", () => {
  const scrollAmount = 300;

  document.querySelectorAll(".scroll-btn").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const container = document.getElementById(targetId);
      if (!container) return;

      const direction = button.classList.contains("left") ? -1 : 1;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
      });

      // Petit délai pour attendre le scroll avant de mettre à jour les boutons
      setTimeout(() => updateButtonState(container), 350);
    });
  });

  // Met à jour l'état des boutons (enabled/disabled)
  function updateButtonState(container) {
    const containerId = container.id;
    const leftBtn = document.querySelector(`.scroll-btn.left[data-target="${containerId}"]`);
    const rightBtn = document.querySelector(`.scroll-btn.right[data-target="${containerId}"]`);

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (leftBtn) leftBtn.disabled = container.scrollLeft <= 0;
    if (rightBtn) rightBtn.disabled = container.scrollLeft >= maxScrollLeft - 1;
  }

  // Initialisation : mise à jour des boutons au chargement
  document.querySelectorAll(".scroll-container").forEach(container => {
    updateButtonState(container);
  });

  // Mise à jour aussi si on scroll manuellement
  document.querySelectorAll(".scroll-container").forEach(container => {
    container.addEventListener("scroll", () => updateButtonState(container));
  });
});
