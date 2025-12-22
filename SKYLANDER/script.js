document.addEventListener("DOMContentLoaded", () => {
        const navIcon = document.getElementById("nav-icon");
        const mobileMenu = document.querySelector(".menu_mobile");

        if (!navIcon || !mobileMenu) return;

        navIcon.addEventListener("click", () => {
          navIcon.classList.toggle("open");
          mobileMenu.classList.toggle("menu-open");
          
          // Bloquear el scroll del cuerpo cuando el menú está abierto
          document.body.style.overflow = mobileMenu.classList.contains("menu-open")
            ? "hidden"
            : "";
        });
      });