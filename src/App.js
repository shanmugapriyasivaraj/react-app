import React from "react";
import AppFunc from "./AppFunc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      firstName: "Anu",
    };
  }
  handleClick = () => {
    this.setState({ count: 12, firstName: "Priya" });
    console.log(this.state.count);
  };
  render() {
    return (
      <>
        <p>Hello {this.props.name} -class !</p>
        <p>Count : {this.state.count}</p>
        <p>FirstName: {this.state.firstName}</p>
        <button onClick={this.handleClick}>Click Me</button>
        <AppFunc name="test 2" />
      </>
    );
  }
}

export default App;
