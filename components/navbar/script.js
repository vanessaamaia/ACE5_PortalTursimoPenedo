$(document).ready(function () {
  let currentPage = window.location.pathname;
  $('#navbar-container').load('./components/navbar/index.html', function () {
    document.querySelectorAll(".navbar .navbar-items a").forEach(link => {
      const path = new URL(link.getAttribute('href'), window.location.href).pathname;
      if (currentPage === path) link.classList.add('navbar-active');
    });
  });
});