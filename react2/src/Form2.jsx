import { useState } from 'react'

const Form2 = () => {
// const[name,setName]=useState("")
// const[lastName,setLastName]=useState("")
// const[role,setRole]=useState("admin")
// const [gender,setGender]=useState("male")
// const[rules,setRules]=useState(false)
const [form,setForm]=useState({
  name:"",
  lastName:"",
  role:"admin",
  gender:"male",
  rules:false
})
const changeHandler=(e)=>{
  // console.log(e.target.name)
  if(e.target.name === "rules"){
    setForm((form)=>({...form, rules : !form.rules}))
  }else{
    setForm((form)=> ({...form,[e.target.name]:e.target.value}))
  }

}
//     const nameHandler=(e)=>{
//         // console.log(e)
//         setName(e.target.value)
//     }
//     const lastNameHandler=(e)=>{
//         setLastName(e.target.value)
//     }
// const selectHandler=(e)=>{
//         // console.log(e.target.value)
//         setRole(e.target.value)

// }
// const genderHandler=(e)=>{
//     setGender(e.target.value)
// }

// const rulesHandler=()=>{
// setRules(rules=>!rules)
// }
    const submitHandler=(e)=>{
      e.preventDefault();
        // console.log({name,lastName,role,gender,rules})
        console.log(form)
    }
    

  return (
    <div>

      <h1>Form </h1>
      <form onSubmit={submitHandler}>

      <input type='text' placeholder='Name' name='name' value={form.name} onChange={changeHandler} />
      <input type='text' placeholder='Last Name' name='lastName' value={form.lastName} onChange={changeHandler} />

    <select value={form.role} name='role' onChange={changeHandler}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="client">Client</option>

    </select>
    <label htmlFor="male">Male</label>
    <input type="radio" name="gender" id="male" value="male" onChange={changeHandler} checked={form.gender==="male"} />
    <label htmlFor="female">Female </label>
    <input type="radio" name="gender" id="female" value="female" onChange={changeHandler} checked={form.gender==="female"}/>
    <label htmlFor="other"> Other</label>
    <input type="radio" name="gender" id="other" value="other" onChange={changeHandler} checked={form.gender==="other"}/>

    <input type='checkbox' name="rules" checked={form.rules} onChange={changeHandler} />
      <button type='submit'>Submit Form</button>
      </form>

    </div>
  )
}

export default Form2
