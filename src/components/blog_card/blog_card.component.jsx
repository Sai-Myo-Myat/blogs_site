import { useContext } from "react";
import BlogContext from "../../context/blog_context";
import { useAuth } from "../../context/auth_context";

const Blog_Card = ({ blog }) => {
  const { blogDispatch } = useContext(BlogContext);
  const auth = useAuth();
  return (
    <div className="my-3 border p-3">
      <h3 className="text-info">{blog.title}</h3>
      <p>{blog.content}</p>
      {auth.user && (
        <div>
          <button className="btn btn-success m-2">Edit</button>
          <button
            onClick={() => blogDispatch({ type: "DELETE-BLOG", payload: blog })}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog_Card;
