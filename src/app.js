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
                <button>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here.
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>Option</p>
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));