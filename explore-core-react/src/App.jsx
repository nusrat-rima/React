import './App.css';
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  const actors = ['bappa raj', 'omor sunny', 'salman shah', 'jashim'];
  const singers = [
    { id: 1, name: 'Dr.Mahfuz', age: 68 },
    { id: 2, name: 'Tahsan', age: 45 },
    { id: 3, name: 'Shuvro deb', age: 57 },
  ];
  const books = [
    { id: 1, name: 'physics', price: 200 },
    { id: 2, name: 'chemistry', price: 200 },
    { id: 3, name: 'Math', price: 200 },
    { id: 4, name: 'Biology', price: 200 },
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      <Library books={books}></Library>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}

      <ToDo task="learn react" isDone={true} time={time}></ToDo>
      <ToDo task="revise react" isDone={false}></ToDo>
      <ToDo task="take shower" isDone={true} time=""></ToDo>

      {/* <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Student></Student>
      <Developer name="Nusrat" tech="Js"></Developer>
      <Developer name="Musta" tech="Python"></Developer>
      <Developer name="rima" tech="java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Salami event="Rojar EId" amount="200"></Salami>
      <Salami event="Garduation" amount="2000"></Salami> */}
    </>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami for :{event}</p>
      <p>Amount :{amount}</p>
    </div>
  );
}

function Player(props) {
  return (
    <div className="student">
      <h3>Name :{props.name}</h3>
      <p>Runs :{props.runs}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: '2px solid green',
        borderRadius: '20px',
      }}
    >
      <h3>Developer {props.name}</h3>
      <p>Technology : {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 22;
  const personStyle = {
    color: 'pink',
    textAlign: 'left',
  };
  return <p style={personStyle}>I am a person and my age is {age}</p>;
}
function Sports() {
  return (
    <div>
      <ul>
        <li>Coder</li>
        <li>learner</li>
      </ul>
      <p>playing and losing</p>
    </div>
  );
}
function Student() {
  return (
    <div className="student">
      <p>Name: Nusrat</p>
      <p>Dept: CSE</p>
    </div>
  );
}

export default App;
