// const Bloglist = (props) => {  // directly using "props" instance
    // access the "props" data
    // const blogs = props.blogs;

import { Link } from "react-router-dom/cjs/react-router-dom.min";

    // const title = props.title;
const Bloglist = ({ blogs,title}) => {   // Destructuring the "props"
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            // key attr. used to iterate
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <h4>Written By {blog.author}</h4>
                    {/* <p>{blog.body}</p> */}
                </Link>
                
            {/* deletion */}
                {/* <button onClick={() =>handleDelete(blog.id)}>Delete Blog</button>                */}
            </div>
            ))}
        </div>
    );
}
export default Bloglist
