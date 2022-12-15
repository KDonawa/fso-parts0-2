function Course({ course }) {
  const total = course.parts.reduce((acc, cur) => {
    return acc + cur.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <strong>total of {total} exercises</strong>
    </div>
  );
}

export default Course;

function Header(props) {
  return <h2>{props.name}</h2>;
}
function Content(props) {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}
function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}
