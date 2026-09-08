const burgerMenu = document.querySelector(".burger-menu");
const mobileNavigation = document.querySelector(".navigation-mobile");
let shoes = [
  {
    name: "Cloud L1",
  },
];

let isNavVisble = false;
burgerMenu.addEventListener("click", () => {
  if (isNavVisble == false) {
    mobileNavigation.style.transform = "scaleX(1)";
    isNavVisble = true;
  } else {
    mobileNavigation.style.transform = "scaleX(0)";
    isNavVisble = false;
  }
});
