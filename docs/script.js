document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path (excluding the base URL)
  const currentPath = window.location.pathname.split("/").pop();

  // Get the link elements
  const links = document.querySelectorAll("nav a");

  // Loop through each link and check if its href matches the current path
  links.forEach((link) => {
    const linkPath = link.getAttribute("href").split("#").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});