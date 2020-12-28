export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <div>
    <p1 class = "pr-10" >ID = {props.courseid}</p1><p1 class = "pr-10">Credit = {props.credit}</p1> <p1 class = "pr-10">Grade = {props.grade}</p1>
    <button onClick = { () => props.delete(props.courseid)}> X</button>
    </div>
  );
};
