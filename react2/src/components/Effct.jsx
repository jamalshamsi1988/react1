import { useEffect, useState } from "react"


const Effct = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false)
    

useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    // console.log("render")
    const fectchData=async()=>{
        try {
            const res=await fetch('https://jsonplaceholde.typicode.com/posts');
             const req=await res.json();
             setData(req)
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


  return (
    <div>
        {!data.length && <h1>Loading...</h1>}
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