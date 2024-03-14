import "./style.css";
import waiterFood from "./images/restaurant.jpg";
import restaurant from "./images/restaurantOutside.jpg";
import foodPics from "./images/foodPics.jpg";
import restaurantInside from "./images/restaurantInside.jpg";

// create content container
const createContainer = () => {
  let body = document.querySelector("body");
  let newContent = document.createElement("div");
  newContent.classList.add("content");
  body.appendChild(newContent);
};

// factory function to create the first page and the main content elements
const titlePage = () => {
  createContainer();
  let content = document.querySelector(".content");
  const addDiv = (text) => {
    let newDiv = document.createElement("div");
    let newPara = document.createElement("p");
    let blurb =
      "Arbor Magna invites you on a culinary adventure through ancient flavors.  Fresh, seasonal ingredients are transformed into dishes inspired by historical recipes, with a modern twist.  Dine in our elegant yet comfortable space, adorned with botanical murals and warm lighting.  Unwind and savor a unique taste of history at Arbor Magna.";

    newPara.textContent = text || blurb;
    newDiv.classList.add("para");

    newDiv.appendChild(newPara);
    content.appendChild(newDiv);
  };

  const addImage = (img) => {
    const myIcon = new Image();
    myIcon.src = img;
    content.appendChild(myIcon);
  };

  const addTitle = () => {
    let pageTitle = document.createElement("h1");
    pageTitle.textContent = "Arbor Magna";

    content.appendChild(pageTitle);
  };

  const addFooter = () => {
    let pageFooter = document.createElement("div");
    pageFooter.classList.add("footer");
    let footerText = document.createElement("p");
    footerText.textContent = "©Arbor Magna copyright 2024";

    pageFooter.appendChild(footerText);
    content.appendChild(pageFooter);
  };

  return {
    addDiv,
    addImage,
    addTitle,
    addFooter,
  };
};

//function to delete all content inside the .container div

const clearContainer = () => {
  let body = document.querySelector("body");
  let child = document.querySelector(".content");
  body.removeChild(child);
};

//function to add new button functionality and remove content

// IIFE to render first page on page load
function renderFirstPage() {
  const firstPage = titlePage();

  firstPage.addTitle();
  firstPage.addImage(restaurant);
  firstPage.addDiv();

  firstPage.addImage(waiterFood);
  firstPage.addDiv(
    "Arbor Magna's service whispers luxury, not shouts it. Knowledgeable staff guide you through the historical inspiration behind each dish.  Attentive but unobtrusive, they ensure your experience is seamless, from pre-dinner drink recommendations to after-dinner botanical curiosities."
  );

  firstPage.addImage(restaurantInside);
  firstPage.addDiv(
    "Step into Arbor Magna and be greeted by a warm embrace.  Sunlight streams through floor-to-ceiling windows, dappling botanical murals that wind across the exposed brick walls.  Comfortable booths upholstered in emerald green offer intimacy, while the antique brass bar gleams under soft pendant lights. The air hums with gentle conversation and the clinking of glasses, promising an evening of refined pleasure."
  );

  firstPage.addImage(foodPics);
  firstPage.addDiv(
    "Arbor Magna's menu is a journey through time on a plate. Imagine Roman flatbreads drizzled with truffle honey, or a Viking-inspired roasted boar with berry reduction. Modern touches elevate the classics: think molecular foams infused with ancient herbs, or delicate desserts reimagining forgotten spices. Every bite promises a surprising, delicious link to the past."
  );

  firstPage.addFooter();
}

// test();
renderFirstPage();

