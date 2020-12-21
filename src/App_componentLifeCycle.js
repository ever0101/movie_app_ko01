import React from "react";
import axios from "axios";

//정적인 하드코딩 데이터를 props로 다뤘고 이제 state를 배우기 위해 class를 선언한다
class App extends React.Component {
  state = {
    count: 0,
    isLoading: true,
  };
  plus = () => {
    // this.setState({ count: this.state.count + 1 });  // 안좋은 방법
    this.setState((currnet) => ({ count: this.state.count + 1 }));
  };
  minus = () => {
    this.setState(function (current) {
      return { count: this.state.count - 1 };
    });
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("Mounted");
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    console.log("I'm rendering!");
    console.log("this.state.isLoading : " + this.state.isLoading);
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready."}</h1>
        <h1>I'm a component class</h1>
        <h3>The number is {this.state.count}</h3>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
