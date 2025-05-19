import {useState} from "react"

const Counter = () => {
console.log("counter Renderd")
// const hook=useState(0)
const [number,setNumber]=useState(0)
const [isShow,setIsShow]=useState(true)
// console.log(hook)

const clickHandler=()=>{
setNumber(number=>number+1)
}

const clickHandler2=()=>{
    // setNumber(number + 1)
    // setNumber(number + 1)
    // setNumber(number + 1)
    // setNumber(number + 1)
setNumber(number=>number + 1)
setNumber(number=>number + 1)
setNumber(number=>number + 1)
setNumber(number=>number + 1)

    }

    const stopHandler2=()=>setNumber("-----")

    const showHandler=()=>setIsShow(true)
    const hideHandler=()=>setIsShow(false)




  return (
    <>
    <button onClick={showHandler}>Show</button>
    <button onClick={hideHandler}>Hide</button>
   {/* {
    isShow ? <div>
    <h1>{number}</h1>
    <button onClick={clickHandler}>Increase +</button>
    <button onClick={clickHandler2}>Increase2 +</button>
    <button onClick={stopHandler2}>Stop </button>

</div> : null
   } */}
   {isShow && <div>
    <h1>{number}</h1>
    <button onClick={clickHandler}>Increase +</button>
    <button onClick={clickHandler2}>Increase2 +</button>
    <button onClick={stopHandler2}>Stop </button>

</div>}
    </>
  )
}

export default Counter
