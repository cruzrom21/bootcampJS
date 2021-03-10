import React from 'react'

const Title = ({course}) => <h1>{course.name}</h1>

const Paragraphs = ({course}) => {
  const par = course.parts.map( x =>
    <p>{x.name} {x.exercises}</p>
  );

  return par;
}

const Total = ({course}) => {
  let sum = 0;
  
  course.parts.forEach(x => {
    sum += x.exercises
  });

  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title course={course} />      
      <Paragraphs course={course} />
      <Total course={course} />
    </div>
  )
}

export default App