import CourseList from "./CourseList"


const Baner = ({title,description,students}) => {
//   const {title,description,students}=props
  return (
    <div>
      <h1>Baner </h1>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{students}</span>
      <CourseList />
    </div>
  )
}

export default Baner
