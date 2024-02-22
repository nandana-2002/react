import React, { Component } from "react";
class Nanda extends Component {
  state = { myString: "hello world", myCode: "hello nandana" };
  render() {
    return (
      <div className="Nanda">
        <h1>{this.state.myString}</h1>
        <h1>{this.state.myCode}</h1>
      </div>
    );
  }
}
export default Nanda;
