function Header(props) {
  return <h1>{props.name}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}

function Content(props) {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
}

function Total(props) {
  return <p>Number of exercises {props.total}</p>;
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const total = course.parts.reduce((acc, cur) => {
    return acc + cur.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
}

export default App;
