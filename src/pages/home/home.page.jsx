import BlogCard from "../../components/blog_card/blog_card.component";

const Home = () => {
  return (
    <div>
      <div className="mt-5 container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
