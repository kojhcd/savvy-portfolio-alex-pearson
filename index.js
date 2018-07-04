var greeting = document.querySelector('#greeting');

var greetUser = function greetUser(){
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
          <div>
            <h3>Welcome to my world,</h3>
            <h4>${firstName} ${lastName}</h4>
          </div>
        `;
    }
    else{
        greetUser();
    }
};

greetUser();
