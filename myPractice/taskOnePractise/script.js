document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const leftSidebar = document.getElementById("left-sidebar");
  const rightSidebar = document.getElementById("right-sidebar");

  toggleButton.addEventListener("click", function () {
    leftSidebar.classList.toggle("open");
    rightSidebar.classList.toggle('display-none')
  });
});
