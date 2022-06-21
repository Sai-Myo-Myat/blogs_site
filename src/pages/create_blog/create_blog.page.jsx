const CreateBlogs = () => {
  return (
    <div className="d-flex align-items-center" style={{ height: "75vh" }}>
      <div className="container py-2 ">
        <input
          type="text"
          className="form-control outline-none col-12"
          placeholder="Title"
        ></input>
        <textarea
          placeholder="Content"
          className="form-control my-5"
          name="content"
          id="content"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn btn-success">Post</button>
      </div>
    </div>
  );
};

export default CreateBlogs;
