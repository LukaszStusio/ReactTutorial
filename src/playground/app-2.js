'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'my first React app',
    options: ['One', 'Two']
};

const templateOne = (
    <article>
        <h1>{app.title.toUpperCase()}</h1>
        {(app.subtitle && app.subtitle.length > 0) && <h2>{app.subtitle}</h2>}
        {app.options.length > 0 ? <p>Here are your options!</p> : <p>No options</p>}
    </article>
);


const user = {
    name: 'Łukasz',
    age: 37,
    location: 'Poznań'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'unknown';
    }
};


const templateTwo = (
    <article>
        <h1> {
            user.name ? user.name.toUpperCase() : 'Anonymous'
        } </h1>
        {(user.age && user.age >=18) &&<p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </article>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);

