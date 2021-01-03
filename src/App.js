import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(0.0);


  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
    var allCredit = 0;
    var allGradeVaule = 0;
    myCourses.forEach((item) => {
      if(item.grade === 'A'){
        allCredit += Number(item.credit)
        allGradeVaule += 4*Number(item.credit)
      }else if(item.grade === 'B+'){
        allCredit += Number(item.credit)
        allGradeVaule += 3.5*Number(item.credit)
      }else if(item.grade === 'B'){
        allCredit += Number(item.credit)
        allGradeVaule += 3*Number(item.credit)
      }else if(item.grade === 'C+'){
        allCredit += Number(item.credit)
        allGradeVaule += 2.5*Number(item.credit)
      }else if(item.grade === 'C'){
        allCredit += Number(item.credit)
        allGradeVaule += 2*Number(item.credit)
      }else if(item.grade === 'D+'){
        allCredit += Number(item.credit)
        allGradeVaule += 1.5*Number(item.credit)
      }else if(item.grade === 'D'){
        allCredit += Number(item.credit)
        allGradeVaule += 1*Number(item.credit)
      }else if(item.grade === 'F'){
        allCredit += Number(item.credit)
        allGradeVaule += 0*Number(item.credit)
      }

      setGPA(allGradeVaule / allCredit)
    })
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    //create input with text and submit and add it to coursecard 
    setMyCourse([...myCourses,inputData])
    //console.log(myCourses)
    
    // recalculate GPA
    calculateGPA();
    
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.courseID !== id
    })
    setMyCourse(course)
    calculateGPA();
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        <div className = " bg-gray-500 bg-opacity-50 text-2xl">
        {myCourses.map((item) => {
           return <CourseCard courseid = {item.courseID} credit = {item.credit} grade = {item.grade} delete = {onDeleteCourse}/>
        })}
        </div>
      </div>
      {/* TODO add course input form */}
      <div className= "text-center bg-red-300">
        <form onSubmit = {(e) => addCourse(e)}>
          <div>
            <label className = "pr-28 ">CourseId</label>
            <label className = "pr-20 ">credit</label>
            <label className = "pr-20 ">grade</label>
          <br></br>
          <input type="number" className = "mr-20" onChange = {(e) => 
            setInputData({...inputData, courseID:e.currentTarget.value})}></input>


          <select className = "mr-20 px-3" onChange = {(e) => 
            setInputData({...inputData,credit: e.currentTarget.value})} >
            {credit.map((item) => {
              return <option value = {item}> {item}</option>
            })}
          </select>


          <select className = "mr-20 px-3" onChange = {(e) =>
            setInputData({...inputData,grade : e.currentTarget.value})}>
            {grade.map((item) => {
              return <option value = {item}>{item}</option>
            })}
          </select>


          <button type = "submit" className="hover:bg-green-700 bg-green-500 rounded-full py-1 px-4">Add</button>
          </div>
        </form>
      </div>
      {/* TODO display calculated GPA */}

      <h1 className = "bg-indigo-600 bg-opacity-75 text-center mt-10 text-4xl">{GPA}</h1>
    </div>
  );
}

export default App;
