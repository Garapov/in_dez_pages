import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".new_reviews.glide")) {
    window.reviews_slider = new Glide(".new_reviews.glide", {
      perView: 4,
      bound: true,
      gap: 20,
    }).mount();
  }
  if (document.querySelector(".new_services.glide")) {
    window.services_slider = new Glide(".new_services.glide", {
      perView: 4,
      bound: true,
      gap: 20,
    }).mount();
  }
  if (document.querySelector(".new_faq")) {
    document.querySelectorAll(".new_faq__item").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }
});
