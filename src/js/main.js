import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".new_reviews.glide")) {
    window.reviews_slider = new Glide(".new_reviews.glide", {
      perView: 4,
      bound: true,
      gap: 20,
      breakpoints: {
        1200: {
          perView: 3,
        },
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }
  if (document.querySelector(".new_services.glide")) {
    window.services_slider = new Glide(".new_services.glide", {
      perView: 4,
      bound: true,
      gap: 20,
      breakpoints: {
        1200: {
          perView: 3,
        },
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }
  if (document.querySelector(".new_specialists.glide")) {
    window.services_slider = new Glide(".new_specialists.glide", {
      perView: 4,
      bound: true,
      gap: 20,
      breakpoints: {
        1200: {
          perView: 3,
        },
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }
  if (document.querySelector(".new_faq")) {
    document.querySelectorAll(".new_faq__item").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }

  if (document.querySelector(".catalog_opener__button")) {
    document.querySelector(".catalog_opener__button").addEventListener("click", () => {
      document.querySelector(".catalog_opener__button").classList.toggle("active");
      document.querySelector(".catalog_opener__menu").classList.toggle("active");
    });
  }

  if (document.querySelector(".catalog_opener__menu_left li")) {
    document.querySelectorAll(".catalog_opener__menu_left li").forEach((item) => {
      console.log(item);
      item.addEventListener("mouseenter", () => {
        document.querySelectorAll(".catalog_opener__menu_left li a").forEach((el) => {
          el.classList.remove("active");
        });
        item.querySelector('a').classList.add("active");
        const index = item.getAttribute("data-index");
        document.querySelectorAll(".catalog_opener__menu_right_item").forEach((el) => {
          el.classList.remove("active");
          if (el.getAttribute("data-index") === index) {
            el.classList.add("active");
          }
        });
      });
    });
  } 
});
