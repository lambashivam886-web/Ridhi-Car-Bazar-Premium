document.addEventListener("DOMContentLoaded", () => {
  console.log("Ridhi Car Bazar Premium Loaded");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href === "#") {
        e.preventDefault();
      }
    });
  });
});
