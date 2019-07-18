class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];

        return (
            <article>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </article>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                <p>
                    You have {this.props.options.length} options in the array;
                </p>
                {

                }
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