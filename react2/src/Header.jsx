import { useState } from 'react';
import styled from 'styled-components'
// import "./Header.css"

const Div = styled.div `
color:${(props)=>(props.selected ? "blue" : "gold")};
background-color: gold;
/* &:hover{
    color: red;
} */
@media (max-width:1200px){
    background-color: aqua;
    
}
`;


const Header = () => {
    const[selected,setSelected]=useState(true)
    // const isLogedin=false;
    const courses=[{id:1,title:"Javascript"},{id:2,title:"React"},{id:3,title:"Next"},{id:4,title:"Javascript2"},{id:5,title:"Javascript3"}];

//     if(isLogedin){
//         return <button>Dashbord</button>

//     }else{

//   return (
//     <div>
//       <button>Login</button>
//     </div>
//      )
//     }
// const styleCss={color:"blue",border:"10px dashed green",backgroundColor:"aqua"}
// const style2={
//     border: "5px green dashed",
//     backgroundColor: "blue"
// }

return(
    // <div className={`container ${selected && "select"}`}>
    // <div style={{color:selected ? "green" : "red"}}>
    <Div selected={selected}>
<ul>
{
 courses.map((i)=>
   
    <li key={i.id}>{i.title}</li>
    )
}
</ul>

<button onClick={()=>setSelected(s=>!s)}>Change color</button>

        {/* {
          isLogedin ? <> <button>Dashbord</button> <button>User</button> </>:  <button>Login</button>
        }
       {
        isLogedin && <h1>Hello</h1>
       } */}
    </Div>
)

 
}

export default Header
