import React, { Component } from "react";
import CommentForm from "./CommentForm";
import ShowCommet from "./ShowComment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CommentForm />
          </div>
          <div className="col">
            <ShowCommet />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
