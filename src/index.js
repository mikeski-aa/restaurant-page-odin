import "./style.css";
import waiterFood from "./images/restaurant.jpg";
import restaurant from "./images/restaurantOutside.jpg";
import foodPics from "./images/foodPics.jpg";
import restaurantInside from "./images/restaurantInside.jpg";
import cheeseCake from "./images/cheesecakeImg.jpg";
import chili from "./images/chiliImg.jpg";
import cuscus from "./images/cuscusImg.jpeg";
import salmon from "./images/salmonImg.jpg";
import soup from "./images/soupImg.jpg";
import location from "./images/location.png";
import backBooze from "./images/backBooze.jpg";

// create content container
const createContainer = () => {
  let body = document.querySelector("body");
  let newContent = document.createElement("div");
  newContent.classList.add("content");
  body.appendChild(newContent);
};

// create item container

const createTestContainer = (newContainerName) => {
  let body = document.querySelector(`.content`);
  let newContent = document.createElement("div");
  newContent.classList.add(newContainerName);

  body.appendChild(newContent);
};

// function to put items in a box
function putInBox(targetBox, targetClass, numberOfItems) {
  for (let i = 0; i < numberOfItems; i++) {
    let body = document.querySelector("body");
    let box = document.querySelector(targetBox);
    let divs = body.querySelector(targetClass);
    box.appendChild(divs);
  }
}

//function to repeat putting stuff in a container
function repeatPutInBox() {
  putInBox(".menuContent", "h3", 1);
  putInBox(".menuContent", "img", 1);
  putInBox(".menuContent", ".para", 1);
}

// factory function to create different DOM elements
const domComponents = () => {
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

  const addTitle = (title, titleSize) => {
    let pageTitle = document.createElement(titleSize || "h1");
    pageTitle.textContent = title || "Arbor Magna";

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
    content,
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
const menuButtonActions = (buttonId) => {
  let btn = document.querySelector(`${buttonId}`);
  btn.addEventListener("click", () => {
    clearContainer();
    switch (buttonId) {
      case "#menu":
        renderMenuPage();

        break;
      case "#home":
        renderFirstPage();

        break;
      case "#about":
        renderAboutPage();

        break;
      case "#location":
        renderLocationPage();

        break;
    }
  });
};

// function to render first page on page load
function renderFirstPage() {
  const firstPage = domComponents(0);
  firstPage.content.classList.add("homePage");

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

// put content in one container
  createTestContainer("mainContent");
  for (let i = 0; i < 4; i++) {
    putInBox(".mainContent", "img", 1);
    putInBox(".mainContent", ".para", 1);
  }

  firstPage.addFooter();
}

//function to create the menu page
function renderMenuPage() {
  const secondPage = domComponents();
  secondPage.content.classList.add("menuPage");

  secondPage.addTitle("Menu", "h1");

  secondPage.addTitle("Starters (Primi Piatti)", "h2");

  secondPage.addTitle("Romanesco Soup with Truffle Dust (6€)", "h3");
  secondPage.addImage(soup);
  secondPage.addDiv(
    "A creamy blend of Romanesco broccoli, toasted almonds, and pecorino cheese, finished with a touch of luxurious truffle dust. (Vegetarian)"
  );

  secondPage.addTitle("Main Courses (Secondi Piatti)", "h2");

  secondPage.addTitle("Pan-Seared Salmon with Hippocras Glaze (22€)", "h3");
  secondPage.addImage(salmon);
  secondPage.addDiv(
    "Fresh salmon cooked to perfection, glazed with a medieval spiced wine sauce of honey, cinnamon, and ginger. Served with roasted root vegetables."
  );

  secondPage.addTitle(
    "Lamb Tajine with Apricot and Pistachio Couscous (24€)",
    "h3"
  );
  secondPage.addImage(cuscus);
  secondPage.addDiv(
    "Slow-cooked Moroccan lamb in a fragrant stew with apricots, toasted almonds, and warm spices. Served on a bed of fluffy couscous with pistachios."
  );

  secondPage.addTitle("Desserts (Dolci)", "h2");

  secondPage.addTitle("Baklava Cheesecake (8€)", "h3");
  secondPage.addImage(cheeseCake);
  secondPage.addDiv(
    "A decadent twist on a classic cheesecake, layered with flaky phyllo dough, chopped nuts, and honey syrup."
  );

  secondPage.addTitle("Chocolate Aztec Chili Pot (7€)", "h3");
  secondPage.addImage(chili);
  secondPage.addDiv(
    "A rich dark chocolate mousse infused with a hint of chili pepper, served in a dark chocolate cup and garnished with candied pumpkin seeds. (Vegan)"
  );
  createTestContainer("menuContent");

// put content in one container
  for (let i = 0; i < 2; i++) {
    putInBox(".menuContent", "h2", 1);
    repeatPutInBox();
  }
  repeatPutInBox();
  putInBox(".menuContent", "h2", 1);
  repeatPutInBox();
  repeatPutInBox();

  secondPage.addFooter();
}

// function to render about page

function renderAboutPage() {
  const aboutPage = domComponents();
  aboutPage.content.classList.add("aboutPage");

  aboutPage.addTitle("About Arbor Magna", "h1");
  // aboutPage.addImage(restaurantInside);
  aboutPage.addDiv(
    `Arbor Magna, meaning "Great Tree," isn't just a Berlin restaurant; it's a historical culinary journey. Founded by archaeologist couple Amelia and David, the restaurant uses fresh ingredients to reimagine dishes from forgotten civilizations. Sunlight spills through murals depicting botanical wonders, casting warmth on exposed brick walls and emerald green booths. Antique brass lights and gentle conversation create a refined atmosphere.`
  );
  aboutPage.addDiv(
    `Amelia's menu explores the past with a modern touch. Roman flatbreads with truffle honey or Viking-inspired boar with berry reduction share space with modern creations – think molecular foams infused with ancient herbs. The knowledgeable staff, some with backgrounds in history, act as your guides, sharing the stories behind each dish. From pre-dinner drinks inspired by historical libations to after-dinner botanical curiosities, Arbor Magna offers a truly immersive dining experience.`
  );
  createTestContainer("aboutContent");
  putInBox(".aboutContent", ".para", 2);

  aboutPage.addFooter();
}
// function to render map page
function renderLocationPage() {
  const locationPage = domComponents();
  locationPage.content.classList.add("locationPage");

  locationPage.addTitle("Where to find us", "h1");
  locationPage.addDiv(`52.509434, 13.289474`);
  locationPage.addImage(location);

  createTestContainer("locationContent");
  putInBox(".locationContent", ".para", 1);
  putInBox(".locationContent", "img", 1);

  locationPage.addFooter();
}

// test();
renderFirstPage();
menuButtonActions("#home");
menuButtonActions("#menu");
menuButtonActions("#about");
menuButtonActions("#location");
