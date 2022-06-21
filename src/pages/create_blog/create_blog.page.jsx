import { useState } from "react";
import { useContext } from "react";
import BlogContext from "../../context/blog_context";
import { useNavigate } from "react-router";

const initialState = {
  title: "",
  id: null,
  content: "",
};

const CreateBlogs = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { blogDispatch } = useContext(BlogContext);
  const navigate = useNavigate();

  const formValueHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, id: Math.random(), [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    blogDispatch({ type: "CREATE-BLOG", payload: formValue });
    navigate(-1);
  };

  return (
    <div className="d-flex align-items-center" style={{ height: "75vh" }}>
      <form className="container py-2 " onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="form-control outline-none col-12"
          placeholder="Title"
          value={formValue.title}
          name="title"
          onChange={formValueHandler}
        ></input>
        <textarea
          placeholder="Content"
          value={formValue.content}
          name="content"
          onChange={formValueHandler}
          className="form-control my-5"
          id="content"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn btn-success">Post</button>
      </form>
    </div>
  );
};

export default CreateBlogs;
