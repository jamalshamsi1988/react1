

const Header = () => {
    // const isLogedin=false;
    const courses=[{id:1,title:"Javascript"},{id:2,title:"Javascript"},{id:3,title:"Javascript"},{id:4,title:"Javascript"},{id:5,title:"Javascript"}];

//     if(isLogedin){
//         return <button>Dashbord</button>

//     }else{

//   return (
//     <div>
//       <button>Login</button>
//     </div>
//      )
//     }
return(
    <div>

<ul>

{
    courses.map((i)=>
   
    <li key={i.id}>{i.title}</li>
    )
}
</ul>



        {/* {
          isLogedin ? <> <button>Dashbord</button> <button>User</button> </>:  <button>Login</button>
        }
       {
        isLogedin && <h1>Hello</h1>
       } */}
    </div>
)

 
}

export default Header
