import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import StyledComponent from './StyledCopmonent'

const Parent = () => {
    const [number, setNumber] = useState(0)

    const changeHandler=()=>setNumber(number=>number+1)

  return (
    <div>
          <h1>Parent :{ number}</h1>
          <ChildA number={number} changeHandler={changeHandler} />
          <ChildB number={number} button={<button onClick={()=>setNumber(number=>number+1)}> B +</button>} />
      <button onClick={changeHandler}> Parent +</button>
          
    </div>
  )
}

export default Parent
