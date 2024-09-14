export default function App3({ taskName, isDone }) {
  if (isDone) {
    return <li>Finished {taskName}</li>;
  }
  return <li>working on {taskName}</li>;
}
