import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter
    };
    console.log("constructor", this.state.counter);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.counter);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.counter);
    // Don't call setState() insinde componentDidUpdate();
    // this.setState({ counter: this.state.counter + 1 }) VERY BAD!!!!!!!!!! DO NOT!!!!! DANGER!!!
  }

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  subtract = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("render", this.state.counter);
    const { counter } = this.props;
    return (
      <div>
        <h2>Counter value from props {counter}</h2>
        <p>Counter value from state {this.state.counter}</p>
        <button onClick={() => this.add()}>Add +1</button>
        <button onClick={() => this.subtract()}>Subtract -1</button>
      </div>
    );
  }
}

Content.defaultProps = {
  counter: 0
};

export default Content;
