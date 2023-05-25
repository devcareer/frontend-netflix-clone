const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("open");

      const icon = faq.querySelector(".faq-icon i")
      if(icon.className = "uil uil-plus") {
         icon.className = "uil uil-times"
      } else {
         icon.className = "uil uil-plus"
      }
   })
})