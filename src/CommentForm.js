import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class CommentForm extends Component {
  inputWidth = {
    width: "80%",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      name,
      message,
      isEdit: false,
    };
    this.props.dispatch({
      type: "ADD_COMMENT",
      data,
    });

    this.getName.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div>
        <h1>Add Comment</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            placeholder="ป้อนชือ"
            style={this.inputWidth}
            ref={(input) => (this.getName = input)}
          />
          <br />
          <textarea
            required
            className="form-control"
            style={this.inputWidth}
            rows="5"
            cols="28"
            placeholder="ข้อความ"
            ref={(input) => (this.getMessage = input)}
          />
          <br />
          <button className="btn btn-primary">Comment</button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
