const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//----------------NAV------------------------------------

let nav1 = document.querySelector("a:nth-child(1)");
nav1.textContent = siteContent["nav"]["nav-item-1"];

let nav2 = document.querySelector("a:nth-child(2)");
nav2.textContent = siteContent["nav"]["nav-item-2"];

let nav3 = document.querySelector("a:nth-child(3)");
nav3.textContent = siteContent["nav"]["nav-item-3"];

let nav4 = document.querySelector("a:nth-child(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"];

let nav5 = document.querySelector("a:nth-child(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"];

let nav6 = document.querySelector("a:nth-child(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"];

//-----------------CTA------------------------------------

let ctaText = document.querySelector("h1");

ctaText.innerHTML = "Dom <br> Is <br> Awesome";

let ctaButton = document.querySelector("button");

ctaButton.innerText = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//--------------------TOP CONTENT H4's-----------------------

let headers = document.querySelectorAll("h4");

headers[0].textContent = siteContent["main-content"]["features-h4"];

headers[1].textContent = siteContent["main-content"]["about-h4"];

//-------------------BOTTOM CONTENT H4's----------------------

headers[2].textContent = siteContent["main-content"]["services-h4"];

headers[3].textContent = siteContent["main-content"]["product-h4"];

headers[4].textContent = siteContent["main-content"]["vision-h4"];

//--------------------CONTACT H4------------------------------

headers[5].textContent = siteContent["contact"]["contact-h4"];

//-------------------TOP CONTENT P's & PIC--------------------------

let ps = document.querySelectorAll("p");

ps[0].textContent = siteContent["main-content"]["features-content"];

ps[1].textContent = siteContent["main-content"]["about-content"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//--------------------BOTTOM CONTENT P's------------------------------

ps[2].textContent = siteContent["main-content"]["services-content"];

ps[3].textContent = siteContent["main-content"]["product-content"];

ps[4].textContent = siteContent["main-content"]["vision-content"];

//----------------------CONTACT--------------------------------------

ps[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";

ps[6].textContent = siteContent["contact"]["phone"];

ps[7].textContent = siteContent["contact"]["email"];

//-----------------------FOOTER-------------------------------

ps[8].textContent = siteContent["footer"]["copyright"];