const createBlogs = (state, payload) => {
  return [...state, payload];
};
const deleteBlogs = (state, blog) => {
  let filtered = state.filter((stateBlog) => stateBlog.id !== blog.id);
  return filtered;
};
const blogs_reducer = (state, action) => {
  switch (action.type) {
    case "CREATE-BLOG":
      return createBlogs(state, action.payload);
    case "DELETE-BLOG":
      return deleteBlogs(state, action.payload);
    default:
      return state;
  }
};

export default blogs_reducer;
