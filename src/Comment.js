import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  onDelete() {
    this.props.dispatch({
      type: "DELETE_COMMENT",
      id: this.props.comment.id,
    });
  }

  onEdit() {
    this.props.dispatch({
      type: "EDIT_COMMENT",
      id: this.props.comment.id,
    });
  }

  render() {
    return (
      <div>
        <h2 className="animate__animated animate__backInRight">
          {this.props.comment.name}
        </h2>
        <p className="animate__animated animate__backInRight">
          {this.props.comment.message}
        </p>
        <div className="animate__animated animate__backInRight">
          <button className="btn btn-info" onClick={this.onEdit.bind(this)}>
            Edit
          </button>
          <button
            className="btn btn-danger"
            style={{ marginLeft: "5px" }}
            onClick={this.onDelete.bind(this)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Comment);
