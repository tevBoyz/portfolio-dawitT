const resume_link =
        "https://1drv.ms/b/c/af15753579054321/EWsD7QYKOfdAj4Kq1OkGWskBxovzjhZ3_i4YriQzQ9Ss3Q?e=6nh9vb";

      function downloadResume() {
        window.open(resume_link, "_blank");
      }

      function navClick(id) {
        // Update active nav item
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.classList.remove("active");
        });
        document.querySelector(`a[href="#${id}"]`).classList.add("active");

        // Scroll to section
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }

      // Highlight nav item based on scroll position
      window.addEventListener("scroll", () => {
        const sections = ["hero", "about", "skills", "projects", "contact"];
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            document.querySelectorAll(".nav-item").forEach((item) => {
              item.classList.remove("active");
            });
            document
              .querySelector(`a[href="#${section}"]`)
              .classList.add("active");
          }
        });
      });



      function openBcertsModal() {
        document.getElementById("blockcertsModal").style.display = "block";
      }
    
      function closeBcertsModal() {
        document.getElementById("blockcertsModal").style.display = "none";
      }

      function openLeyuModal() {
        document.getElementById("leyuTuneModal").style.display = "block";
      }
    
      function closeLeyuModal() {
        document.getElementById("leyuTuneModal").style.display = "none";
      }
    
      window.onclick = function(event) {
        const modal = document.getElementById("blockcertsModal");
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    
