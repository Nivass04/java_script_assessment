const stars = document.querySelectorAll("#rating span");
let result = 0;
stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    // console.log(index+1);
    result = index + 1;
    change();
  });
});

const change = function () {
  stars.forEach((star, index) => {
    if (index < result) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
};
