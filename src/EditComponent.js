import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class EditComponent extends Component {
  inputWidth = {
    width: "80%",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newName = this.getName.value;
    const newMessage = this.getMessage.value;
    const data = {
      newName,
      newMessage,
    };

    this.props.dispatch({
      type: "UPDATE_COMMENT",
      id: this.props.comment.id,
      data: data,
    });
  };

  render() {
    return (
      <div>
        <h3>Update Comment</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            placeholder="ป้อนชือ"
            style={this.inputWidth}
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.comment.name}
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
            defaultValue={this.props.comment.message}
          />
          <br />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
