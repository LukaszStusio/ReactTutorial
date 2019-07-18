const app = {
    title: 'Indecision App',
    subtitle: 'My very first React app',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');

    const option = e.target.elements.option.value;

    if(option) {
        const numberLength = option.trim();
        if (numberLength.length != 0) {
            app.options.push(option);
            e.target.elements.option.value = '';
            renderAppOptionsLength();
        }
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderAppOptionsLength();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    // console.log(randomNum);
    alert(option);
};

const renderAppOptionsLength = () => {
    const templateOne = (
         <article>
            <h1> {app.title.toUpperCase()}</h1>
            {(app.subtitle && app.subtitle.length > 0) &&
                <h2>{app.subtitle}</h2>}
            {app.options.length > 0 ? <p>Here are your options!</p>
                :<p>No options</p>}
            <p>App options length: {app.options.length}</p>

            <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
            <button>Add option</button>
            </form>

            <ol>
                {
                    app.options.map((number) => {
                            return  <li key={number}>Item: {number}</li>;
                        }
                    )
                }
            </ol>
        </article>
    );
    ReactDOM.render(templateOne, appRoot);

};

const appRoot = document.getElementById('app');
renderAppOptionsLength();