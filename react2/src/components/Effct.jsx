import { useEffect, useState } from "react"
import Counter from "./Counter";


const Effct = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false)
    const [id,setId]=useState("")
    

useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    // console.log("render")
    const fectchData=async()=>{
        try {
            const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
             const req=await res.json();
             setData(req)
             console.log(req)
             console.log(id)
        } catch (error) {
            // console.log("somthing went wrong",error)
            setError(error)

            
        }
        
        // console.log(req)

    }
    fectchData()
},[])

// useEffect(()=>{

// },[])
const searchId=async()=>{
    const  res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const req=await res.json();
    console.log(req)
}

  return (
    <div>
        {id > 100 && <Counter/>}
        {!data.length && <h1>Loading...</h1>}

    <input type="text" placeholder="ID" value={id} onChange={e=>setId(e.target.value)} />
    <button onClick={searchId}>Search</button>

        <ul>

    {
        data.map(post=><li key={post.id}>{post.title}</li>)
    }
    {
        error && <h1>somthing went wrong</h1>
    }
        </ul>
    </div>
  )
}

export default Effct