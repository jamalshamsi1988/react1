import { useState } from 'react'

const Form2 = () => {
const[name,setName]=useState("")
const[lastName,setLastName]=useState("")
const[role,setRole]=useState("admin")
const [gender,setGender]=useState("male")
const[rules,setRules]=useState(false)

    const nameHandler=(e)=>{
        // console.log(e)
        setName(e.target.value)
    }
    const lastNameHandler=(e)=>{
        setLastName(e.target.value)
    }
const selectHandler=(e)=>{
        // console.log(e.target.value)
        setRole(e.target.value)

}
const genderHandler=(e)=>{
    setGender(e.target.value)
}

const rulesHandler=()=>{
setRules(rules=>!rules)
}
    const submitHandler=()=>{
        console.log({name,lastName,role,gender,rules})
    }
    

  return (
    <div>
      <h1>Form </h1>
      <input type='text' placeholder='Name' value={name} onChange={nameHandler} />
      <input type='text' placeholder='Last Name' value={lastName} onChange={lastNameHandler} />

    <select value={role} onChange={selectHandler}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="client">Client</option>

    </select>
    <lable htmlFor="male">Male</lable>
    <input type="radio" name="gender" id="male" value="male" onChange={genderHandler} checked={gender==="male"} />
    <lable htmlFor="female">Famle </lable>
    <input type="radio" name="gender" id="female" value="female" onChange={genderHandler} checked={gender==="female"}/>
    <lable htmlFor="other"> Other</lable>
    <input type="radio" name="gender" id="other" value="other" onChange={genderHandler} checked={gender==="other"}/>

    <input type='checkbox' checked={rules} onChange={rulesHandler} />
      <button onClick={submitHandler}>Submit Form</button>
    </div>
  )
}

export default Form2
