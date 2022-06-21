import { useReducer, createContext } from "react";
import blogs_reducer from "./blog_reducer";

const Blogs = [
  {
    title: "web server",
    id: 1,
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quosassumenda. In magnam soluta rerum facere deleniti, quasi inventore,voluptas dolore atque obcaecati itaque ipsa tenetur dignissimos similique est neque!",
  },
  {
    title: "web client",
    id: 2,
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quosassumenda. In magnam soluta rerum facere deleniti, quasi inventore,voluptas dolore atque obcaecati itaque ipsa tenetur dignissimos similique est neque!",
  },
  {
    title: "server side rendering",
    id: 3,
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quosassumenda. In magnam soluta rerum facere deleniti, quasi inventore,voluptas dolore atque obcaecati itaque ipsa tenetur dignissimos similique est neque!",
  },
  {
    title: "client side rendering",
    id: 4,
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quosassumenda. In magnam soluta rerum facere deleniti, quasi inventore,voluptas dolore atque obcaecati itaque ipsa tenetur dignissimos similique est neque!",
  },
];

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, blogDispatch] = useReducer(blogs_reducer, Blogs);
  return (
    <BlogContext.Provider value={{ blogs: blogs, blogDispatch: blogDispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
