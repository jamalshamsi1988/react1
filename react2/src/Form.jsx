import React, { useState } from 'react'

const Form = () => {

const[name,setName]=useState("");
const [lastName,setLastName]=useState("")
const[gender,setGender]=useState("male")
const[role,setRole]=useState("user")
const[rules,setRules]=useState(false)

    const nameHandler=(e)=>{
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const lastNameHandler=e=>{
        setLastName(e.target.value)
    }
    const genderHandler=e=>{
        // console.log(e.target.value)
        setGender(e.target.value)
    }
    const roleHandler=(e)=>{
        // console.log(e.target.value)
        setRole(e.target.value)
    }
    const ruleHandler=()=>{
        setRules(rules=>!rules)
    }
    const submitHandler=()=>{
        console.log({name,lastName,gender,role,rules})
    }
  return (
    <div>

        <input type="text" placeholder='Name' value={name} onChange={nameHandler} />
        <input type="text" placeholder='Last Name' value={lastName} onChange={lastNameHandler} />

        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id='male' value="male" onChange={genderHandler} checked={"male"===gender}/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id='female' value="female" onChange={genderHandler} checked={"female"===gender}/>
        <label htmlFor="other">Other</label>
        <input type="radio" name="gender" id='other' value="other" onChange={genderHandler} checked={"other"===gender} />

        <select name={role} onChange={roleHandler}>
            <option value="user">User</option>
            <option value="client">Client</option>
            <option value="writer">Writer</option>

        </select>

    <input type="checkbox" checked={rules} onChange={ruleHandler} />
        <button onClick={submitHandler} > Send</button>
      
    </div>
  )
}

export default Form
