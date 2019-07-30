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
    handlePick() {
        console.log('handlePick works fine!');
    }

    render() {
        return (
                <button onClick={this.handlePick}>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        console.log('handleRemoveAll also works!');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <p>
                    You have {this.props.options.length} options in the array;
                </p>
                {
                    this.props.options.map((thing) => <Option key={thing} thingText={thing} />
                    )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>That is: {this.props.thingText}</p>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            console.log(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));