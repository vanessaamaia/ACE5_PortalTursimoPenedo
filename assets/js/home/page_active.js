(() => {
  document.querySelector("span.year").textContent = new Date().getFullYear();

  document.querySelectorAll(".nav-links a").forEach((link) => {
      if (link.href === location.href
          || link.href === location.href + "#") {
          link.classList.add("active");
      } else {
          link.classList.remove("active");
      }
  });
})()