
//custom hook

import {useState ,useEffect } from 'react';

const useFetch = (url)=>{
    const [data,setBlogs] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null); 

  // useEffect function can render (or) runs for every render(any deletion,any updation..any changes...)for any state
  // can fires on every render ,and also fetch the data....
    
  useEffect(() => {
    const abortCont = new AbortController();
    // console.log("useEffect hook ran ...");
    // console.log(blogs); // it renders for every action
    fetch(url,{signal:abortCont.signal})   //2nd arg is for cleanup function with useEffect,for not getting errors when multiple times routing occurs
    .then(res => {
      if(!res.ok){
        throw Error("could not fetch the data from the resource");
      }
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err =>{
    if (err.name === "Abort Error"){
        console.log("Fetch Aborted...!");
    } else{
      setIsPending(false);
      setError(err.message);
    }
    });

    return ()=> abortCont.abort();
  },[url]);

  // for not just every state updation or iteration useEffect re-renders, but for some of them can render.. 
  // we use "dependency array" => [] ,as 2nd argument in useEffect()..,but it renders only on 1st iteration
  // if need then,we can add that state to the 2nd arg in useEffect...

  return {data, isPending, error};
}
export default useFetch