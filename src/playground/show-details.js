const app = {
    title: 'Visibility toggle',
    subtitle: 'Here are some details',
    buttonText: ['Show details', 'Hide details'],
    isVisible: true
};

const showDetails = () => {
    if (app.buttonText) {
        console.log('działa');
        app.isVisible = !app.isVisible;
        renderDetails();

    };

}

const renderDetails = () => {
    const templateOne = (
         <article>
            <h1> {app.title.toUpperCase()}</h1>
            <button onClick={showDetails}>{app.isVisible ? app.buttonText[1] : app.buttonText[0]}</button>
            {app.isVisible ? <p>Here are your options!</p>
                : <p></p>}
        </article>
    );

    ReactDOM.render(templateOne, appRoot);

};

const appRoot = document.getElementById('app');
renderDetails();