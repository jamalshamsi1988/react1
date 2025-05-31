import React, { useState } from 'react'

const Form = () => {

// const[name,setName]=useState("");
// const [lastName,setLastName]=useState("")
// const[gender,setGender]=useState("male")
// const[role,setRole]=useState("user")
// const[rules,setRules]=useState(false)
const [form,setForm]=useState({
    name:"",
    lastName:"",
    gender:"male",
    role:"user",
    rules:false
})

const changeHandler=(e)=>{
    // console.log(e.target.name)
    const name=e.target.name;
    const value=e.target.value;

    if(name === "rules"){
        setForm(form=>({...form, rules : !form.rules}))
    }else{
        setForm(form => ({...form, [name]: value}))

    }

}

    // const nameHandler=(e)=>{
    //     // console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // const lastNameHandler=e=>{
    //     setLastName(e.target.value)
    // }
    // const genderHandler=e=>{
    //     // console.log(e.target.value)
    //     setGender(e.target.value)
    // }
    // const roleHandler=(e)=>{
    //     // console.log(e.target.value)
    //     setRole(e.target.value)
    // }
    // const ruleHandler=()=>{
    //     setRules(rules=>!rules)
    // }
    const submitHandler=(event)=>{
        event.preventDefault()
        // console.log({name,lastName,gender,role,rules})

        console.log(form)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>

        <input type="text" placeholder='Name' name='name' value={form.name} onChange={changeHandler} />
        <input type="text" placeholder='Last Name' name='lastName' value={form.lastName} onChange={changeHandler} />

        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id='male' value="male" onChange={changeHandler} checked={"male"===form.gender}/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id='female' value="female" onChange={changeHandler} checked={"female"===form.gender}/>
        <label htmlFor="other">Other</label>
        <input type="radio" name="gender" id='other' value="other" onChange={changeHandler} checked={"other"===form.gender} />

        <select value={form.role} name="role" onChange={changeHandler}>
            <option value="user">User</option>
            <option value="client">Client</option>
            <option value="writer">Writer</option>

        </select>

    <input type="checkbox" name='rules' checked={form.rules} onChange={changeHandler} />
        <button type='submit' > Send </button>
      </form>
    </div>
  )
}

export default Form
