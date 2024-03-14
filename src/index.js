import "./style.css";
import waiterFood from "./images/restaurant.jpg";
import restaurant from "./images/restaurantOutside.jpg";
import foodPics from "./images/foodPics.jpg";
import restaurantInside from "./images/restaurantInside.jpg";


// factory function to create the first page and the main content elements
const titlePage = () => {
  let content = document.querySelector("#content");
  const addDiv = (text) => {
    let newDiv = document.createElement("div");
    let newPara = document.createElement("p");
    let blurb =
      "Arbor Magna invites you on a culinary adventure through ancient flavors.  Fresh, seasonal ingredients are transformed into dishes inspired by historical recipes, with a modern twist.  Dine in our elegant yet comfortable space, adorned with botanical murals and warm lighting.  Unwind and savor a unique taste of history at Arbor Magna.";

    newPara.textContent = (text || blurb) ;
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
    let pageFooter = document.createElement('div');
    pageFooter.classList.add('footer')
    let footerText = document.createElement('p');
    footerText.textContent = '©Arbor Magna copyright 2024'

    pageFooter.appendChild(footerText);
    content.appendChild(pageFooter);
  }

  return {
    addDiv,
    addImage,
    addTitle,
    addFooter
  };
};
const firstPage = titlePage();

firstPage.addTitle();
firstPage.addImage(restaurant);
firstPage.addDiv();

firstPage.addImage(waiterFood);
firstPage.addDiv();

firstPage.addImage(restaurantInside);
firstPage.addDiv();

firstPage.addImage(foodPics);
firstPage.addDiv();

firstPage.addFooter();



