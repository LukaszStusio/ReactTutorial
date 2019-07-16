let count = 0;

const addOne = () => {
    count++;
    renderCountApp();
    console.log('addOne works', count);
};

const oddOne = () => {
    count--;
    renderCountApp();
    console.log('oddOne also works');
};

const reset = () => {
    count = 0;
    renderCountApp();
    console.log('reset works too');
};

const renderCountApp = () => {
    const templateTwo = (
        <article>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={oddOne}>-1</button>
        <button onClick={reset}>Reset</button>
        </article>
    );
    ReactDOM.render(templateTwo, appRoot);
}

const appRoot = document.getElementById('app');

renderCountApp();