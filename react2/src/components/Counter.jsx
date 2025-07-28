import { useEffect } from "react"

 const Counter = () => {
    
    useEffect(()=>{

            const interval=setInterval(()=>{
                console.log("cleanup")
            },1000)

            return ()=>{
                console.log("cleanup")
                
            }
    },[])
  return (
    <div>Counter</div>
  )
}

export default Counter