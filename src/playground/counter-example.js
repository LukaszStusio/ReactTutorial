class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });

        console.log('handleMinusOne fired!');
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
        });
        console.log('handleAddOne fired!');
    }

    handleReset() {
        this.setState(() => {
            return{
                count: 0
            };
        });

        console.log('rest fired!');
    }
    render() {
        return (
            <article>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleReset}>reset</button>
            </article>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;

// const addOne = () => {
//     count++;
//     renderCountApp();
//     console.log('addOne works', count);
// };

// const oddOne = () => {
//     count--;
//     renderCountApp();
//     console.log('oddOne also works');
// };

// const reset = () => {
//     count = 0;
//     renderCountApp();
//     console.log('reset works too');
// };

// const renderCountApp = () => {
//     const templateTwo = (
//         <article>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={oddOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </article>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// const appRoot = document.getElementById('app');

// renderCountApp();