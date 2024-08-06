// GSAP Registers
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

// Cursor
const cursor = document.querySelector(".cursor");

// Loader
const loader = document.querySelector(".loader");
const starContainer = document.querySelector(".stars-container");
const shootingStar = document.querySelectorAll(".shooting-star");
const numberOfStars = 30;
const loaderTitlePlace_1 = document.querySelector(".loader-title-1");
const loaderTitlePlace_2 = document.querySelector(".loader-title-2");
const loaderTitlePlace_3 = document.querySelector(".loader-title-3");

// Root
const root = document.querySelector(".root");

// Header
const atNavBuy = document.querySelector(".nav-buy");
const atNavSell = document.querySelector(".nav-sell");
const atNavNews = document.querySelector(".nav-news");
const atNavAbout = document.querySelector(".nav-about");
const navPos = -3;
const navElements = document.querySelectorAll(".nav-el");
const headerInput = document.querySelector("#header-input");
const placeholders = ["Cars", "Real Estate", "Watches", "Yachts", "Jets"];

// Buy Panel
const buyPanel = document.querySelector(".buy-nav-panel");
const buyPanelHousing = document.querySelector(".buy-nav-panel-housing");
let buyPanelToggle = false;

// Search Panel
const searchPanel = document.querySelector(".search-panel");
const searchPanelHousing = document.querySelector(".search-panel-housing");
const searchPanelContent = document.querySelector(".search-panel-content");
let searchPanelToggle = false;

// Hero Section
const ctaButtonWrapper = document.querySelector(".cta-button-wrapper");
const ctaButtonText = document.querySelector("#cta-text");
const ctaButtonMover = document.querySelector("#cta-mover");

// Monthly Selections Section
const msSectionContainer = document.querySelector(".ms-card-container");
const msSectionDrag = document.querySelector(".ms-cards-dragger");
const maxScroll = msSectionDrag.scrollWidth - msSectionContainer.clientWidth;

// Featured Listing Section
const filterButton = document.querySelectorAll(".fls-filter-strip button");
// let flsData = [
//   {
//     flsProductIndex: "0",
//     flsProductTag: "Jet",
//     flsProductImage:
//       "./Source/assets/images/products/jets/gulfstream/g-550/g-550.webp",
//     flsProductCompany: "Gulfstream",
//     flsAdditionalInfo: "2003",
//     flsProductName: "G550",
//     flsProductPrice: "P.O.R.",
//     flsProductText: `
//       Available for Lease. Embodying exceptional
//       international performance, the Gulfstream G550 has
//       the capacity to fly 6,750 nautical miles or 12,501
//       kilometers nonstop.
//     `,
//   },
//   {
//     flsProductIndex: "1",
//     flsProductTag: "Cars",
//     flsProductImage:
//       "./Source/assets/images/products/cars/rolls-royce/ghost/ghost-v-12.webp",
//     flsProductCompany: "Rolls Royce",
//     flsAdditionalInfo: "2014",
//     flsProductName: "Ghost",
//     flsProductPrice: "$156,654",
//     flsProductText: `
//       This stunning Rolls Royce Ghost comes equipped with
//       factory options to ensure travel in unbeatable
//       comfort and luxury.
//     `,
//   },
//   {
//     flsProductIndex: "2",
//     flsProductTag: "Real Estate",
//     flsProductImage:
//       "./Source/assets/images/products/real-estate/villas/cap-d-antibes-villa/cap-d-antibes-luxury-villa.webp",
//     flsProductCompany: "Luxury Villa",
//     flsAdditionalInfo: "France",
//     flsProductName: "Cap d'Antibes",
//     flsProductPrice: "P.O.R.",
//     flsProductText: `
//       In one of the most sought-after areas of Cap
//       d'Antibes, close to the magnificent French Riviera
//       beaches of La Garoupe, this exceptional,
//       Provencal-style villa is situated on more than two
//       acres of landscaped gardens with panoramic views
//       extending from the Bay of Antibes to the French
//       Alps.
//     `,
//   },
//   {
//     flsProductIndex: "3",
//     flsProductTag: "Yacht",
//     flsProductImage:
//       "./Source/assets/images/products/yachts/madsummer/madsummer.webp",
//     flsProductCompany: "Moran Yachts & Ships",
//     flsAdditionalInfo: "2019",
//     flsProductName: "Madsummer",
//     flsProductPrice: "€229.000.000",
//     flsProductText: `
//       The 312’ 8” (95.3m) MADSUMMER is among the latest
//       stalwart yachts of the German shipyard Lurssen.
//     `,
//   },
//   {
//     flsProductIndex: "4",
//     flsProductTag: "Real Estate",
//     flsProductImage:
//       "./Source/assets/images/products/real-estate/islands/bermuda/windsong-house.webp",
//     flsProductCompany: "Bermuda",
//     flsAdditionalInfo: "1720",
//     flsProductName: "Windsong House",
//     flsProductPrice: "$15,900,000",
//     flsProductText: `
//       Spectacularly situated on a private peninsula
//       ensconced by protected Riddell's Bay and the Great
//       Sound, Windsong House enjoys an irreplaceable
//       location that is one of Bermuda's very best.
//       Originally built in 1720 by a sea captain.
//     `,
//   },
//   {
//     flsProductIndex: "5",
//     flsProductTag: "Yacht",
//     flsProductImage:
//       "./Source/assets/images/products/yachts/khalilah/khilah-yacht.webp",
//     flsProductCompany: "YCO",
//     flsAdditionalInfo: "2015",
//     flsProductName: "Khalilah",
//     flsProductPrice: "$28,500,000",
//     flsProductText: `
//       The 49m carbon composite-built Palmer Johnson is one
//       of a kind. Head-turning and bold, the sparkling gold
//       Supersport Khalilah offers exceptional cruising
//       performance.
//     `,
//   },
//   {
//     flsProductIndex: "6",
//     flsProductTag: "Jets",
//     flsProductImage:
//       "./Source/assets/images/products/jets/dassault/falcon-2000-lx/falcon-2000-lx.webp",
//     flsProductCompany: "Dassault",
//     flsAdditionalInfo: "2007",
//     flsProductName: "Falcon 2000LX",
//     flsProductPrice: "$12,995,000",
//     flsProductText: `
//       The 49m carbon composite-built Palmer Johnson is one
//       of a kind. Head-turning and bold, the sparkling gold
//       Supersport Khalilah offers exceptional cruising
//       performance.
//     `,
//   },
//   {
//     flsProductIndex: "7",
//     flsProductTag: "Real Estate",
//     flsProductImage:
//       "./Source/assets/images/products/real-estate/islands/fiji/island-crown-jewel-of-fiji.webp",
//     flsProductCompany: "Island",
//     flsAdditionalInfo: "France",
//     flsProductName: "Crown Jewel of Fiji",
//     flsProductPrice: "$17,000,000",
//     flsProductText: `
//       For the first time offered for sale in more than a
//       decade, is the timeless and rare opportunity to own
//       one of the crown jewels of Fiji real estate, a
//       spectacular freehold island in the South Pacific
//       paradise of Fiji. Katafanga Island, also known as
//       the Blue Lagoon.
//     `,
//   },
//   {
//     flsProductIndex: "8",
//     flsProductTag: "Real Estate",
//     flsProductImage:
//       "./Source/assets/images/products/real-estate/islands/fiji/island-crown-jewel-of-fiji.webp",
//     flsProductCompany: "Island",
//     flsAdditionalInfo: "France",
//     flsProductName: "Crown Jewel of Fiji",
//     flsProductPrice: "$17,000,000",
//     flsProductText: `
//       For the first time offered for sale in more than a
//       decade, is the timeless and rare opportunity to own
//       one of the crown jewels of Fiji real estate, a
//       spectacular freehold island in the South Pacific
//       paradise of Fiji. Katafanga Island, also known as
//       the Blue Lagoon.
//     `,
//   },
// ];

// Wallpapers Section
const wsButton = document.querySelector(".ws-button-stars");

// Locomotive Scroll [Smooth]
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const theCursor = () => {
  document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
      display: "block",
      // top: 0,
      left: 0,
    });
    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
    });
  });
};

const cursorOnElements = () => {
  gsap.to(cursor, {
    scale: 3,
    opacity: 0.1,
    ease: "back(2).inOut",
  });
};

const cursorOffElements = () => {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
    ease: "back(2).inOut",
  });
};

const starsLogic = () => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  starContainer.appendChild(star);

  gsap.to(star, {
    duration: Math.random() * 2 + 1,
    opacity: 1,
    scale: Math.random() + 1,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    ease: "power2.inOut",
    onStart: () => {
      gsap.to(star, {
        duration: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        repeat: -1,
        ease: "power4.inOut",
      });
    },
  });
};

const createStars = () => {
  for (let i = 0; i < numberOfStars; i++) {
    starsLogic();
  }
};

const shootingStarAnimation = () => {
  let starNumber = () => {
    return Math.floor(Math.random() * 10) + 10;
  };
  let starStagger = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  gsap.to(shootingStar, {
    height: "40px",
    x: 1000,
    y: 1000,
    opacity: 1,
    ease: "power4.in",
    filter: "blur(2px)",
    duration: 2,
    delay: 1,
    repeat: -1,
    repeatDelay: starNumber(),
    stagger: starStagger(),
  });
};

const loaderTextLogic = () => {
  // let loaderText_1 = "LUXURY PULSE";
  let loaderText_1 = "Luxury Pulse";
  let loaderTextArray_1 = loaderText_1.split("");

  loaderTextArray_1.forEach((element) => {
    let loaderTextSpan_1 = document.createElement("span");
    loaderTextSpan_1.innerHTML = element;
    loaderTextSpan_1.classList.add("loader-text-span-1");
    loaderTitlePlace_1.appendChild(loaderTextSpan_1);
  });

  // let loaderText_2 = "THE LUXURIOUS MARKETPLACE";
  let loaderText_2 = "The Luxurious Marketplace";
  let loaderTextArray_2 = loaderText_2.split("");

  loaderTextArray_2.forEach((element) => {
    let loaderTextSpan_2 = document.createElement("span");
    loaderTextSpan_2.innerHTML = element;
    loaderTextSpan_2.classList.add("loader-text-span-2");
    loaderTitlePlace_2.appendChild(loaderTextSpan_2);
  });

  // let loaderText_3 = "";
  // let loaderTextArray_3 = loaderText_3.split("");

  // loaderTextArray_3.forEach((element) => {
  //   let loaderTextSpan_3 = document.createElement("span");
  //   loaderTextSpan_3.innerHTML = element;
  //   loaderTextSpan_3.classList.add("loader-text-span-3");
  //   loaderTitlePlace_3.appendChild(loaderTextSpan_3);
  // });
};

const loaderAnimation = () => {
  let loaderSpans_1 = Array.from(
    document.querySelectorAll(".loader-text-span-1")
  );
  loaderSpans_1.sort(() => Math.random() - 0.5);

  let loaderSpans_2 = Array.from(
    document.querySelectorAll(".loader-text-span-2")
  );
  loaderSpans_2.sort(() => Math.random() - 0.5);

  // let loaderSpans_3 = Array.from(
  //   document.querySelectorAll(".loader-text-span-3")
  // );
  // loaderSpans_3.sort(() => Math.random() - 0.5);

  let timeline = gsap.timeline();
  timeline.to(loaderSpans_1, {
    delay: 0.5,
    opacity: 1,
    stagger: 0.05,
    filter: "blur(0px)",
  });
  timeline.to(loaderSpans_1, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power4.inOut",
  });
  timeline.to(loaderSpans_2, {
    opacity: 1,
    stagger: 0.05,
    filter: "blur(0px)",
  });
  timeline.to(loaderSpans_2, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power4.inOut",
  });
  // timeline.to(loaderSpans_3, {
  //   opacity: 1,
  //   stagger: 0.05,
  //   filter: "blur(0px)",
  // });
  // timeline.to(loaderSpans_3, {
  //   opacity: 0,
  //   duration: 0.5,
  //   stagger: 0.05,
  //   ease: "power4.inOut",
  // });
  timeline.to(loader, {
    // y: "-200%",
    opacity: 0,
    display: "none",
    duration: 2,
    ease: "power4.inOut",
    onComplete: () => {
      gsap.to(document.querySelector("body"), {
        height: "100%",
      });
    },
  });
};

const theLoader = () => {
  createStars();
  shootingStarAnimation();
  loaderTextLogic();
  loaderAnimation();
};

const scrollIndicator = document.querySelector(".scroll-indicator");
const scrollIndicatorHousing = document.querySelector(
  ".scroll-indicator-housing"
);

const theScrollIndicator = () => {
  gsap.to(scrollIndicator, {
    opacity: 0,
    ease: "power4.inOut",
    scrollTrigger: {
      scroll: root,
      trigger: ".scroll-indicator",
      start: "bottom 80%",
      end: "bottom 70%",
      scrub: 2,
      // markers: true,
    },
  });
};

const caseStudyLinkTab = document.querySelector(".case-study-link-tab");
const cslIcon = document.querySelector("#cslt-main-icon");
const csltLink = document.querySelector(".cslt-link");

const cslIconAnimation = () => {
  const iconTl = gsap.timeline({ yoyo: true, repeat: -1 });
  iconTl.to(cslIcon, {
    filter: "drop-shadow(0px 0px 0px #fff)",
  });
  iconTl.to(cslIcon, {
    filter: "drop-shadow(0px 0px 1.5px #fff)",
  });
};

const cslTabExpand = () => {
  gsap.to(caseStudyLinkTab, {
    width: "210px",
    ease: "circ.inOut",
    overwrite: true,
  });
  gsap.to(csltLink, {
    opacity: 1,
    delay: 0.3,
    ease: "circ.inOut",
    overwrite: true,
  });
};

const cslTabContract = () => {
  gsap.to(caseStudyLinkTab, {
    width: "50px",
    delay: 0.3,
    ease: "circ.inOut",
    overwrite: true,
  });
  gsap.to(csltLink, {
    opacity: 0,
    ease: "circ.inOut",
    overwrite: true,
  });
};

const theCaseStudyLinkTab = () => {
  cslIconAnimation();
  caseStudyLinkTab.addEventListener("mouseenter", () => {
    cslTabExpand();
    cursorOnElements();
  });
  caseStudyLinkTab.addEventListener("mouseleave", () => {
    cslTabContract();
    cursorOffElements();
  });
};

const navBuySeparator = () => {
  let navBuyText = "Buy";
  let navBuySplit = navBuyText.split("");

  navBuySplit.forEach((element) => {
    let navBuySpan = document.createElement("span");
    navBuySpan.innerHTML = element;
    navBuySpan.classList.add("nav-buy-span");
    navBuySpan.classList.add("nav-span");
    atNavBuy.appendChild(navBuySpan);
  });
};

const navSellSeparator = () => {
  let navSellText = "Sell";
  let navSellSplit = navSellText.split("");

  navSellSplit.forEach((element) => {
    let navSellSpan = document.createElement("span");
    navSellSpan.innerHTML = element;
    navSellSpan.classList.add("nav-sell-span");
    navSellSpan.classList.add("nav-span");
    atNavSell.appendChild(navSellSpan);
  });
};

const navNewsSeparator = () => {
  let navNewsText = "News";
  let navNewsSplit = navNewsText.split("");

  navNewsSplit.forEach((element) => {
    let navNewsSpan = document.createElement("span");
    navNewsSpan.innerHTML = element;
    navNewsSpan.classList.add("nav-news-span");
    navNewsSpan.classList.add("nav-span");
    atNavNews.appendChild(navNewsSpan);
  });
};

const navAboutSeparator = () => {
  let navAboutText = "About";
  let navAboutSplit = navAboutText.split("");

  navAboutSplit.forEach((element) => {
    let navAboutSpan = document.createElement("span");
    navAboutSpan.innerHTML = element;
    navAboutSpan.classList.add("nav-about-span");
    navAboutSpan.classList.add("nav-span");
    atNavAbout.appendChild(navAboutSpan);
  });
};

const characterSeparator = () => {
  navBuySeparator();
  navSellSeparator();
  navNewsSeparator();
  navAboutSeparator();
};

const navBuyAnimation = (element) => {
  const duration = 0.3;
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      y: navPos,
      duration: duration,
    });
  });
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      y: 0,
      duration: duration,
    });
  });
};

const navElementLogic = () => {
  const navBuySpans = document.querySelectorAll(".nav-buy-span");
  navBuySpans.forEach((element) => {
    navBuyAnimation(element);
  });

  const navSellSpans = document.querySelectorAll(".nav-sell-span");
  navSellSpans.forEach((element) => {
    navBuyAnimation(element);
  });

  const navNewsSpans = document.querySelectorAll(".nav-news-span");
  navNewsSpans.forEach((element) => {
    navBuyAnimation(element);
  });

  const navAboutSpans = document.querySelectorAll(".nav-about-span");
  navAboutSpans.forEach((element) => {
    navBuyAnimation(element);
  });
};

const navElementsAnimation = () => {
  characterSeparator();
  navElementLogic();
};

const cursorOnNavElmenets = () => {
  navElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      cursorOnElements();
    });
  });

  navElements.forEach((element) => {
    element.addEventListener("mouseleave", () => {
      cursorOffElements();
    });
  });
};

const typeEffect = (text) => {
  const chars = text.split("");
  const tl = gsap.timeline();

  chars.forEach((char) => {
    tl.to(headerInput, {
      duration: 0.2,
      opacity: 1,
      ease: "power1.inOut",
      onStart: () => {
        headerInput.placeholder += char;
      },
    });
  });
  return tl;
};

const eraseEffect = (text) => {
  const chars = text.split("");
  const tl = gsap.timeline();

  chars.forEach(() => {
    tl.to(headerInput, {
      duration: 0.05,
      opacity: 1,
      ease: "power1.inOut",
      onStart: () => {
        headerInput.placeholder = headerInput.placeholder.slice(0, -1);
      },
    });
  });

  return tl;
};

const cyclePlaceholders = () => {
  const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  placeholders.forEach((placeholder) => {
    masterTl
      .add(typeEffect(placeholder))
      .to(headerInput, { opacity: 1, duration: 1 }, "+=1") // Hold the text for a moment
      .add(eraseEffect(placeholder));
    // .to(headerInput, { opacity: 0, duration: 0.5 }, "+=1"); // Make sure it's completely erased before next one starts
  });
};

const inputPlaceholderAnimation = () => {
  cyclePlaceholders();
};

const cursorOnInput = () => {
  headerInput.addEventListener("mouseenter", () => {
    cursorOnElements();
  });
  headerInput.addEventListener("mouseleave", () => {
    cursorOffElements();
  });
};

const searchShortcut = document.querySelector("#input-shortcut");

const inputHotKeyDetector = () => {
  document.onkeydown = (event) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === "k" || event.key === "K")
    ) {
      event.preventDefault();
      headerInput.focus();
      gsap.to(searchShortcut, {
        innerText: "Escape",
      });
    } else if (event.key === "Escape") {
      headerInput.blur();
      gsap.to(searchShortcut, {
        innerText: "Ctrl + k",
      });
    }
  };
};

const navBar = () => {
  navElementsAnimation();
  cursorOnNavElmenets();
};

const searchPanelOpen = () => {
  gsap.to(searchPanel, {
    display: "block",
    opacity: 1,
    ease: "power2.inOut",
    overwrite: true,
  });
  gsap.to(searchPanelHousing, {
    height: "40%",
    ease: "power2.inOut",
    duration: 0.5,
    delay: 0.2,
    overwrite: true,
  });
  gsap.to(searchPanelContent, {
    opacity: 1,
    ease: "power2.inOut",
    delay: 0.5,
    overwrite: true,
  });
};

const searchPanelClose = () => {
  gsap.to(searchPanelContent, {
    opacity: 0,
    ease: "power2.inOut",
    overwrite: true,
  });
  gsap.to(searchPanelHousing, {
    height: "0",
    ease: "power2.inOut",
    duration: 0.5,
    delay: 0.2,
    overwrite: true,
  });
  gsap.to(searchPanel, {
    display: "none",
    opacity: 0,
    ease: "power2.inOut",
    delay: 0.5,
    overwrite: true,
  });
};

const searchPanelLogic = () => {
  headerInput.addEventListener("focus", () => {
    searchPanelToggle = true;
    searchPanelOpen();
    if (buyPanelToggle) {
      buyPanelClose();
    }
  });
  headerInput.addEventListener("blur", () => {
    searchPanelToggle = false;
    searchPanelClose();
  });
};

const searchBar = () => {
  inputPlaceholderAnimation();
  cursorOnInput();
  inputHotKeyDetector();
  searchPanelLogic();
};

const buyPanelOpen = () => {
  gsap.to(buyPanel, {
    display: "block",
    height: "80vh",
    ease: "power2.inOut",
  });
  gsap.to(buyPanelHousing, {
    opacity: 1,
    // display: "flex",
    ease: "power2.in",
    delay: 0.2,
    overwrite: true,
  });
};

const buyPanelClose = () => {
  gsap.to(buyPanelHousing, {
    // display: "none",
    opacity: 0,
    ease: "power2.inOut",
  });
  gsap.to(buyPanel, {
    display: "none",
    height: "0",
    ease: "power2.out",
    delay: 0.4,
    overwrite: true,
  });
};

const buyPanelLogic = () => {
  atNavBuy.addEventListener("mouseenter", () => {
    buyPanelOpen();
    buyPanelToggle = true;
    if (searchPanelToggle) {
      searchPanelClose();
    }
  });

  buyPanel.addEventListener("mouseleave", () => {
    buyPanelToggle = false;
    buyPanelClose();
  });
};

const theHeader = () => {
  navBar();
  searchBar();
  buyPanelLogic();
};

const heroButtonLogic = () => {
  ctaButtonWrapper.addEventListener("mouseenter", () => {
    gsap.to(ctaButtonMover, {
      opacity: 1,
      scale: 30,
      ease: "back.in(0.5)",
    });
  });

  ctaButtonWrapper.addEventListener("mouseleave", () => {
    gsap.to(ctaButtonMover, {
      opacity: 0,
      scale: 1,
      ease: "back.in(0.7)",
    });
  });

  ctaButtonWrapper.addEventListener("mousemove", (event) => {
    let ctaRect = ctaButtonWrapper.getBoundingClientRect();
    gsap.to(ctaButtonMover, {
      x: event.clientX - ctaRect.left - ctaButtonMover.offsetWidth / 2,
      y: event.clientY - ctaRect.top - ctaButtonMover.offsetHeight / 2,
      ease: "back.out(1)",
    });
  });
};

const cursorOnCTAButton = () => {
  ctaButtonWrapper.addEventListener("mouseenter", () => {
    cursorOnElements();
  });
  ctaButtonWrapper.addEventListener("mouseleave", () => {
    cursorOffElements();
  });
};

const theHeroSection = () => {
  heroButtonLogic();
  cursorOnCTAButton();
};

const msCards = document.querySelectorAll(".ms-section-card");

const monthlySectionCardAnimation = () => {
  msCards.forEach((card) => {
    let animation = gsap.to(card, {
      backgroundPosition: "400% 400%",
      duration: 30,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      keyframes: [
        { backgroundPosition: "0% 100%", duration: 7.5 },
        { backgroundPosition: "25% 50%", duration: 7.5 },
        { backgroundPosition: "100% 50%", duration: 7.5 },
        { backgroundPosition: "50% 100%", duration: 7.5 },
        { backgroundPosition: "0% 100%", duration: 7.5 },
      ],
    });

    card.addEventListener("mouseenter", () => {
      animation.pause();
      gsap.to(animation, {
        progress: 1,
        duration: 5,
      });
    });

    card.addEventListener("mouseleave", () => {
      animation.pause();
      gsap
        .to(animation, {
          progress: 0,
          duration: 30,
        })
        .then(() => animation.play());
    });
  });
};

const monthlySelectionSectionLogic = () => {
  // Draggable.create(".ms-cards-dragger", {
  //   type: "x",
  //   edgeResistance: 0.9,
  //   bounds: {
  //     minX: -(msSectionDrag.scrollWidth - msSectionContainer.clientWidth),
  //     maxX: 0,
  //   },
  //   throwProps: true,
  // });

  let container = document.querySelector(".ms-card-container");
  let input = document.querySelector(".ms-cards-dragger");
  let msSectionCard = document.querySelector(".ms-section-card");
  let scrollAmount = 0;
  let scrollMin = msSectionCard.clientWidth;
  let scrollMax = msSectionCard.clientWidth * 2;

  document.querySelector(".ms-arrow-right-holder").onclick = function () {
    container.scrollTo({
      top: 0,
      left: Math.max((scrollAmount += 500), scrollMax),
      behavior: "smooth",
    });
  };

  document.querySelector(".ms-arrow-left-holder").onclick = function () {
    container.scrollTo({
      top: 0,
      left: Math.min((scrollAmount -= 500), scrollMin),
      behavior: "smooth",
    });
  };
};

const theMonthlySectionSection = () => {
  monthlySelectionSectionLogic();
  monthlySectionCardAnimation();
};

const filterButtonAnimation = () => {
  filterButton.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        borderColor: "var(--fls-strip-button-border-hover)",
      });
      gsap.to(cursor, {
        scale: 2.5,
        opacity: 0.3,
        ease: "back(2).inOut",
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        borderColor: "var(--fls-strip-button-border)",
      });
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        ease: "back(2).inOut",
      });
    });
  });
};

const featuredCard = document.querySelectorAll(".fls-product-card");

const featuredProductHover = () => {
  // featuredCard.forEach(element => {
  //   element.addEventListener("mouseenter", () => {
  //     gsap.to();
  //   });
  // });

  featuredCard.forEach((card) => {
    const content = card.querySelector(".fls-product-content");
    const contentHousing = card.querySelector(".fls-product-content-housing");

    card.addEventListener("mouseenter", () => {
      gsap.to(content, { opacity: 1, ease: "back(2).inOut" });
      gsap.to(contentHousing, {
        opacity: 1,
        duration: 0.3,
        ease: "back(2).inOut",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(content, { opacity: 0, ease: "back(2).inOut" });
      gsap.to(contentHousing, {
        opacity: 0,
        duration: 0.3,
        ease: "back(2).inOut",
      });
    });
  });
};

const flsFilterLogic = () => {};

const wsSectionForm = document.querySelector(".ws-form");
const wsSectionInput = document.querySelector(".ws-input");
const wsSectionButton = document.querySelector(".ws-submit");

const theWeekSection = () => {
  wsSectionButton.addEventListener("click", (event) => {
    event.preventDefault();
    wsSectionInput.value = "";
  });
  wsSectionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      wsSectionInput.value = "";
    }
  });
};

const theFeaturedListingsSection = () => {
  filterButtonAnimation();
  featuredProductHover();
  flsFilterLogic();
};

const EXECUTIONER = () => {
  theCursor();
  theScrollIndicator();
  theCaseStudyLinkTab();
  theLoader();
  theHeader();
  theHeroSection();
  theMonthlySectionSection();
  theFeaturedListingsSection();
  theWeekSection();
};

EXECUTIONER();
