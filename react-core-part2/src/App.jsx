import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';

function App() {
  function handleClick() {
    alert('I am clicked');
  }
  const handleClick2 = () => {
    alert('clicked 2no button');
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>CLick Me</button>
      <button onClick={() => handleAdd5(10)}>Add5 button</button>
    </>
  );
}

export default App;
