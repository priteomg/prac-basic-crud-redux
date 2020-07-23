const commentReducer = (state = [], action) => {
  //เขียนรูปแบบ Action
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);
    case "EDIT_COMMENT":
      return state.map((comment) =>
        comment.id === action.id
          ? { ...comment, isEdit: !comment.isEdit }
          : comment
      );
    case "UPDATE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            name: action.data.newName,
            message: action.data.newMessage,
            isEdit: !comment.isEdit,
          };
        } else return comment;
      });
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.id !== action.id);
    default:
      return state;
  }
};

export default commentReducer;
