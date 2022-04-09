import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  handleCount = (type) => {
    if (type === "INCREMENT") this.setState({ count: this.state.count + 1 });
    else if (type === "DECREMENT")
      this.setState({ count: this.state.count - 1 });
    else this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.handleCount("INCREMENT")}>Increment</button>
        <button onClick={() => this.handleCount("DECREMENT")}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default App;
