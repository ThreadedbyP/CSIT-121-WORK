document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
  
    menuBtn.addEventListener("click", () => {
      // Toggle sidebar visibility
      sidebar.classList.toggle("sidebar-active");
    });
  });
  