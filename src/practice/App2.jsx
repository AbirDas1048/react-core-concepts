function App2() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Developer></Developer>
      <Device name="laptop" price="80k"></Device>
      <Device name="mobile" price="20k"></Device>
      <Device name="watch" price="5k"></Device>
    </>
  );
}

function Person() {
  const age = 20;
  return (
    <div className="person">
      <h3>I am a person {age}</h3>
      <p>I am a good boy</p>
    </div>
  );
}

function Developer() {
  const design = {
    border: "2px solid blue",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={design}>
      <h3>I am a backend developer</h3>
      <p>My favourite language is PHP</p>
    </div>
  );
}

function Device({ name, price }) {
  return (
    <h3>
      I use this {name} price is {price}
    </h3>
  );
}

export default App2;
