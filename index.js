import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';

var Home = {
    'title': 'Alex Pearson\'s Project'
};

var Blog = {
    'title': 'Welcome to my blog page'
};

var Contact = {
    'title': 'Contact Me'
};

var Projects = {
    'title': 'Take a look at some of my projects'
};

var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;

    root.innerHTML = `
        ${Navigation}
        ${Header(state)}
        ${Content}
        ${Footer}
    `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');

    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
        <div>
            <h3>Welcome to my home page,</h3>
            <h4>${event.target.value}</h4>
        </div>
    `
    );

    links = document.querySelectorAll('#navigation a');

    links[0].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Blog);
        }
    );

    links[1].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Contact);
        }
    );

    links[2].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Projects);
        }
    );
}

render(Home);
