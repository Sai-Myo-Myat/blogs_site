import BlogCard from "../../components/blog_card/blog_card.component";
import { useContext } from "react";
import BlogContext from "../../context/blog_context";

const Home = () => {
  const { blogs } = useContext(BlogContext);
  console.log("blogs", blogs);
  return (
    <div>
      <div className="mt-5 container">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Home;
