import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".new_reviews.glide")) {
    window.reviews_slider = new Glide(".new_reviews.glide", {
      perView: 4,
      bound: true,
      gap: 20,
    }).mount();
  }
});
