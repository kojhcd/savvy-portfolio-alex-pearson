import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';


var greetUser = function greetUser(){
    var greeting = document.querySelector('#greeting');
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
          <div>
            <h3>Welcome to my home page,</h3>
            <h4>${firstName} ${lastName}</h4>
          </div>
        `;
    }
    else{
        greetUser();
    }
};

document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
  `;

greetUser();
