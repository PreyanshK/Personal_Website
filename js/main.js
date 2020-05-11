//toggle navbar to expand on hamburger click
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //for hamburger animation
  hamburger.classList.toggle("hamburger-exit");
});

// jQuery Smooth Scroll

$(".navbar a, .down-btn a, .up-btn a").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800 //speed of scroll
    );
  }
});
