window.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementById("mobile-cta"));
  const mobileBtn = document.getElementById("mobile-cta"),
    nav = document.querySelector("nav"),
    mobileBtnExist = document.getElementById("exist-cta");
  mobileBtn.addEventListener("click", () => {
    console.log("hello");
    nav.classList.add("mobile-menu");
  });

  mobileBtnExist.addEventListener("click", () => {
    nav.classList.remove("mobile-menu");
  });
});
