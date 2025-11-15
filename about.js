  // Mobile Menu Toggle
      document
        .querySelector(".mobile-toggle")
        .addEventListener("click", function () {
          document.querySelector(".nav-menu").classList.toggle("active");
        });

      // Hero Slider
      let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".slider-dot");

      function showSlide(n) {
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
      }

      // Auto slide change
      setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);

      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index);
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            document.querySelector(".nav-menu").classList.remove("active");
          }
        });
      });

      // Header background on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
          header.style.backdropFilter = "blur(10px)";
        } else {
          header.style.backgroundColor = "var(--white)";
          header.style.backdropFilter = "none";
        }
      });