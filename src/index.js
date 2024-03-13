import './style.css';
import Icon from './restaurant.jpg';


console.log('testing');

function addImage(){
    const element = document.createElement('div');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(addImage());

