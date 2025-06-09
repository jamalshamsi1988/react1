// import React, { useState } from 'react'

const ChildA = ({number,changeHandler}) => {
  return (
    <div style={{border:"1px solid black" , padding:"10px", margin:"20px" }}>
      <h4>ChildA :{number}</h4>
      <button onClick={changeHandler}> A +</button>
    </div>
  )
}

export default ChildA
