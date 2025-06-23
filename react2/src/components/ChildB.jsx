import React from 'react'

const ChildB = ({number,button}) => {
  return (
    <div>
          <h4>ChildB :{number}</h4>
          {button}
      {/* <button onClick={()=>setNumber(number=>number+1)}> B +</button> */}
      </div>
  )
}

export default ChildB
