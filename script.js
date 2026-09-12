const burgerMenu = document.querySelector(".burger-menu");
const mobileNavigation = document.querySelector(".navigation-mobile");
let selectedImage = document.querySelector(".shoe-choice img");
let colors = document.querySelectorAll(".color img");
let shoeName = document.querySelector(".shoe-info h3");
let shoePrice = document.querySelector(".shoe-info p");
let subtract = document.querySelector(".fa-minus");
let quantity = document.querySelector(".amount");
let add = document.querySelector(".fa-plus");
let quantityCount = 1;

// Shoe quantity
add.addEventListener("click", (e) => {
  quantityCount++;
  quantity.textContent = `${quantityCount}`;
});

subtract.addEventListener("click", (e) => {
  if (quantityCount !== 1) {
    quantityCount--;
    quantity.textContent = `${quantityCount}`;
  }
});

// Get query string
let queryString = decodeURIComponent(
  window.location.search.replace("?shoe=", ""),
);

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

const shoes = [
  {
    name: "SoleDrop",
    price: 2100,
    colors: [
      { 1: "./images/shoes/Casaul/SoleDrop/SoleDrop 1.png" },
      { 2: "./images/shoes/Casaul/SoleDrop/SoleDrop 2.png" },
      { 2: "./images/shoes/Casaul/SoleDrop/SoleDrop 2.png" },
    ],
  },
];

// Cloud L1
if (queryString == "cloudl1-3") {
  // Set shoe price and name
  shoeName.textContent = "Cloud L1";
  shoePrice.textContent = "R1 500";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Casaul/Cloud L1/Cloud L1 3.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Cloud L1/Cloud L1 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Cloud L1/Cloud L1 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Cloud L1/Cloud L1 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Cloud L1/Cloud L1 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Sole Drop
else if (queryString == "SoleDrop-1") {
  shoeName.textContent = "SoleDrop";
  shoePrice.textContent = "R2 100";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Casaul/SoleDrop/SoleDrop 1.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/SoleDrop/SoleDrop 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/SoleDrop/SoleDrop 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/SoleDrop/SoleDrop 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/SoleDrop/SoleDrop 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Trail slide
// console.log(queryString);
else if (queryString == "trail-slide-1") {
  // Set shoe price and name
  shoeName.textContent = "Trail Slide";
  shoePrice.textContent = "R500";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Casaul/Trail Slide/Trail Slide 1.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Trail Slide/Trail Slide 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Trail Slide/Trail Slide 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Trail Slide/Trail Slide 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/Trail Slide/Trail Slide 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }

      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Heritage loafer
else if (queryString == "herigate-loafer-1") {
  // Set shoe price and name
  shoeName.textContent = "Heritage Loafer";
  shoePrice.textContent = "R2 500";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Formal/Heritage Loafer/Heritage Loafer 1.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Heritage Loafer/Heritage Loafer 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Heritage Loafer/Heritage Loafer 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Heritage Loafer/Heritage Loafer 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Heritage Loafer/Heritage Loafer 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Legacy monk
else if (queryString == "legacy-monk-3") {
  // Set shoe price and name
  shoeName.textContent = "Legacy Monk";
  shoePrice.textContent = "R3000";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Formal/Legacy Monk/Legacy Monk 3.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Legacy Monk/Legacy Monk 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Legacy Monk/Legacy Monk 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Legacy Monk/Legacy Monk 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Legacy Monk/Legacy Monk 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Urban Chukka
else if (queryString == "urban-chukka-1") {
  // Set shoe price and name
  shoeName.textContent = "Urban Chukka";
  shoePrice.textContent = "R2 300";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Formal/Urban Chukka/Urban Chukka 1.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Urban Chukka/Urban Chukka 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Urban Chukka/Urban Chukka 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Urban Chukka/Urban Chukka 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Formal/Urban Chukka/Urban Chukka 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Ascend high
else if (queryString == "ascend-high-1") {
  // Set shoe price and name
  shoeName.textContent = "Ascend High";
  shoePrice.textContent = "R2 600";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Casaul/The Ascend High/The Ascend High 1.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Ascend High/The Ascend High 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Ascend High/The Ascend High 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Ascend High/The Ascend High 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Ascend High/The Ascend High 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// The trail
else if (queryString == "the-trail-4") {
  // Set shoe price and name
  shoeName.textContent = "The Trail";
  shoePrice.textContent = "R1 500";
  selectedImage.setAttribute(
    "src",
    "./images/shoes/Casaul/The Trail/The Trail 4.png",
  );

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Trail/The Trail 1.png",
      );
    } else if (color.className == "color-2") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Trail/The Trail 2.png",
      );
    } else if (color.className == "color-3") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Trail/The Trail 3.png",
      );
    } else if (color.className == "color-4") {
      color.setAttribute(
        "src",
        "./images/shoes/Casaul/The Trail/The Trail 4.png",
      );
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}

// Drift
else if (queryString == "drift-1") {
  // Set shoe price and name
  shoeName.textContent = "Drift";
  shoePrice.textContent = "R500";
  selectedImage.setAttribute("src", "./images/shoes/Casaul/Drift/Drift 1.png");

  colors.forEach((color) => {
    if (color.className == "color-1") {
      color.setAttribute("src", "./images/shoes/Casaul/Drift/Drift 1.png");
    } else if (color.className == "color-2") {
      color.setAttribute("src", "./images/shoes/Casaul/Drift/Drift 2.png");
    } else if (color.className == "color-3") {
      color.setAttribute("src", "./images/shoes/Casaul/Drift/Drift 3.png");
    } else if (color.className == "color-4") {
      color.setAttribute("src", "./images/shoes/Casaul/Drift/Drift 4.png");
    }
  });

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.className == "color-1") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-2") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-3") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
      if (e.target.className == "color-4") {
        if (
          e.target.getAttribute("src") !== selectedImage.getAttribute("src")
        ) {
          selectedImage.style.transition = "all 0s linear";
          selectedImage.style.transform =
            "translate(100%, -100%) rotate(90deg)";
          setTimeout(() => {
            selectedImage.style.transition = "all 0.5s linear";
            selectedImage.style.transform = "translate(0, 0) rotate(0)";
          }, 50);
        }
        selectedImage.setAttribute("src", `${e.target.getAttribute("src")}`);
      }
    });
  });
}
