const list = document.querySelector(".star__list"),
  stars = document.querySelectorAll(".fa-star");

list.addEventListener("click", (e) => {
  var index = Array.prototype.indexOf.call(stars, e.target);

  for (let i = 0; i <= 4; i++) {
    if (i <= index) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
});
