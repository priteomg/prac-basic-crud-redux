import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditComponent from "./EditComponent";
class ShowComment extends Component {
  render() {
    return (
      <div>
        <h1>Show All Comment</h1>
        {this.props.comments.map((comment) => (
          <div key={comment.id}>
            {comment.isEdit ? (
              <EditComponent comment={comment} key={comment.id} />
            ) : (
              <Comment key={comment.id} comment={comment} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

export default connect(mapStateToProps)(ShowComment);
