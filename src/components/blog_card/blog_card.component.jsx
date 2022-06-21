const Blog_Card = () => {
  return (
    <div className="my-3 border p-3">
      <h3 className="text-secondary">Web Server</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quos
        assumenda. In magnam soluta rerum facere deleniti, quasi inventore,
        voluptas dolore atque obcaecati itaque ipsa tenetur dignissimos
        similique est neque!
      </p>
      <div>
        <button className="btn btn-success m-2">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Blog_Card;
