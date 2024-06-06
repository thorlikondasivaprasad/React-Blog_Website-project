import { useState , useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './usefetch';


const Home = () =>{  
  //   var [name , setName] = useState('Siva');    // it re-renders a new value
  //   var [age , setAge] = useState(20);
  //   // useState hook
  // const handleClick = () =>{
  //   setName("Prasad");
  //   setAge(22);
  // }

// outputting list items using "map" iterator
  // const [blogs,setBlogs] = useState([
  //   {title:"New Website", body:"Using React", author:"Naga",id:1},
  //   {title:"New UI",body:"Using Angular",author:"Naga",id:2},
  //   {title:"New Server",body:"Using Django",author:"Siva",id:3}
  // ]);

  // functions as props
    // for deletion of blogs,calls handleDelete function to filter out....
  // const handleDelete = (id) =>{          // send filtered data as a props
  //   const newblogs = blogs.filter((blog) => blog.id !== id);   // which deletes the blog as filter
  //   setBlogs(newblogs);
  // }

  const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

  return (
    // events - onClick events
    <div className="home">
      {/* <h2>Blogs - Home  Page</h2><br />
      <p>{ name } is {age} years old now!!</p><br />
      <button onClick = { handleClick }>Change-name</button>  */}
      { error && <div>{ error}</div>}
{/* //handleDelete is sending as a props for BlogList.js */}
      {isPending && <div>Loading...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}  {/* Syntax for using "props"=> used for passing data btw parent cmp to child cmp  */}
      {/* conditional templating in react */}

      {/* "filter"  is used for any searching's particular  */}
      {/* props */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Naga")} title="Naga's Blogs!!"/> */}

      {/* <button onClick={() => setName("Prasad")}>Change Name</button>
      <p>{ name }</p> */}
    </div>
  );
}   
export default Home;
