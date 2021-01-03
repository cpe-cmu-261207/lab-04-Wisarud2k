export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <div>
    <p1 class = "pr-10" >ID = {props.courseid}</p1><p1 class = "pr-10">Credit = {props.credit}</p1> <p1 class = "pr-10">Grade = {props.grade}</p1>
    <button class = "hover:bg-red-700 bg-red-500 rounded-full py-1/2 px-2" onClick = { () => props.delete(props.courseid)}> X</button>
    </div>
  );
};
