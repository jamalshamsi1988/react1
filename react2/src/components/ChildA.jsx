// import React, { useState } from 'react'

import StyledComponent from "./StyledCopmonent"

const ChildA = ({number,changeHandler}) => {
  return (
    <div >
      <h4>ChildA :{number}</h4>
      <button onClick={changeHandler}> A +</button>
    </div>
  )
}

export default ChildA
