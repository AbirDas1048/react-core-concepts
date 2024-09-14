import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import App2 from "./practice/App2";
import App3 from "./practice/App3";
import ConditionalRendering from "./practice/ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <App2></App2>
      <br />
      <App3 taskName="PHP" isDone={true}></App3>
      <App3 taskName="React" isDone={false}></App3>
      <App3 taskName="Python" isDone={true}></App3>
      <br />
      <ConditionalRendering
        taskName="PHP"
        isDone={true}
        doneOnTime={true}
      ></ConditionalRendering>

      <ConditionalRendering
        taskName="React"
        isDone={false}
        doneOnTime={false}
      ></ConditionalRendering>

      <ConditionalRendering
        taskName="Python"
        isDone={true}
        doneOnTime={false}
      ></ConditionalRendering>

      <ConditionalRendering
        taskName="Java"
        isDone={false}
        doneOnTime={true}
      ></ConditionalRendering>
    </>
  );
}

export default App;
