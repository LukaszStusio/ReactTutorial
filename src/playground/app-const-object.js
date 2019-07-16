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
        <ul>
            <li>item one</li>
            <li>item two</li>
        </ul>
    </article>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateOne, appRoot);