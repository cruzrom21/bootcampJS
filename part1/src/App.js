import './App.css';

const Mensaje = (p) => {
  return <h1 style={{color: p.color}}>{p.msg}</h1>
}

function App() {
  const a = 2;
  const b = 2;

  return (
    <div className="App">
      <Mensaje msg='pepe' color='red'/>
      <Mensaje msg='123' color='blue'/>
      {a + b}
    </div>
  );
}

export default App;
