import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
    const [number, setNumber] = useState(0)

    const changeHandler=()=>setNumber(number=>number+1)

  return (
    <div style={{border:"1px solid black" , padding:"10px", margin:"20px" }}>
          <h1>Parent :{ number}</h1>
          <ChildA number={number} changeHandler={changeHandler} />
          <ChildB number={number} button={<button onClick={()=>setNumber(number=>number+1)}> B +</button>} />
      <button onClick={changeHandler}> Parent +</button>
          
    </div>
  )
}

export default Parent
