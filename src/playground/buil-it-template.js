const app = {
    title: "Visibility Toggle",
    details: "Some details here..."
};

const visibleDetails = <p>{app.details}</p>;

const onClickShowDetails = () => {
    console.log("czy to dziala?");

};

const renderAppDetails = () => {
    const appTemplate = (
        <article>
            <h1>{app.title}</h1>
            {<button onClick={onClickShowDetails}>showHideText</button>}
                {}
        </article>
    );

    ReactDOM.render(appTemplate, appRoot);
};

const appRoot = document.getElementById('app');
renderAppDetails();