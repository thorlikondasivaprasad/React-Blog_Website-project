import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('Naga');
  const [isPending , setIsPending ] =useState(false);
  const history = useHistory();   // history is maintained by using this....


  const handleSubmit =(e)=>{
    e.preventDefault();  // for preventing from refreshing when clicked on add blog butttom

    //new blog is adding to json file consists of {title,body,author}
    const blog = { title,body,author};
    // console.log(blog);
    setIsPending(true);
    // POST-request the data to json file dynamically,using the endpoint of json/blogs
    fetch('http://localhost:8000/blogs', {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body : JSON.stringify(blog)
    }).then(()=>{
      console.log("New blog added..!");
      //history.go(-1);                   //for moving backward for 1 step gives better understanding,from where we start
      history.push('/')     // '/' for home page             // **** for Redirects to the Home page........
    })

  }

  return (
    <div className="create">
      <h2>Add a new Blog!</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input type="text" required value={title} 
        onChange={(e)=> setTitle(e.target.value)}
        />

        <label>Blog Author: </label>
        <select
        value={author}
        onChange = {(e) => setAuthor(e.target.value)}>
          <option value="Naga">Naga</option>
          <option value="Siva">Siva</option>
          <option value="Naveen">Naveen</option>
        </select>
        
        <label>Blog Body: </label>
        <textarea required
        value={body} 
        onChange={(e)=> setBody(e.target.value)}>
        </textarea>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
         <p>{author}</p> */}  
{/* for to track the state actions */}
      </form>
    </div>
  )
}
export default Create