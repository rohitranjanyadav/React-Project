import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg p-2">
        <img
          className="w-full rounded-2xl"
          src={blog.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base">{blog.description}</p>
          <br />
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
