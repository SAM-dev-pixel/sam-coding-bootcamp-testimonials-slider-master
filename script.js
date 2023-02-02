const testimonials = document.querySelectorAll(".testimonial-wrapper");
// const testimonial = document.querySelector(".testimonial-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
prevBtn.addEventListener("click", () => {
  //   testimonials.forEach((testimonial) => {
  //     testimonial.style.left = "-100%";
  //     testimonial.style.opacity = "0";
  //   });
  testimonials[0].style.left = "-100%";
  testimonials[0].style.opacity = "0";
  testimonials[1].style.left = "0%";
  testimonials[1].style.opacity = "1";
  // testimonial[0].style.opacity = "0";
});
nextBtn.addEventListener("click", () => {
  //   testimonials.forEach((testimonial) => {
  //     testimonial.style.left = "-100%";
  //     testimonial.style.opacity = "0";
  //   });
  testimonials[0].style.left = "0%";
  testimonials[0].style.opacity = "1";
  testimonials[1].style.left = "100%";
  testimonials[1].style.opacity = "0";
});

// let testimonialHeight = testimonials[0].clientHeight;
// if (document.body.clientHeight <= testimonialHeight) {
//   document.body.style.height = testimonialHeight + "px";
//   testimonials[0].style.height = "100%";
// }
