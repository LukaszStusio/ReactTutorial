class IndecisionApp extends React.Component {
    render() {
        return (
            <article>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </article>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div class='div-margins'>
                Options component here.
            </div>
        );
    }

}
class AddOption extends React.Component {
    render() {
        return (
            <button>Add an option</button>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));