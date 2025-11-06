import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    setBlogs(response.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs)


  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-10 ">
        {blogs.map((blog) => {
          return <Card blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Home;
