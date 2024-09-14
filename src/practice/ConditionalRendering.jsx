function ConditionalRendering({ taskName, isDone, doneOnTime }) {
  let comments = isDone && doneOnTime ? "Very Good" : isDone ? "Good" : "Poor";

  return (
    <li>
      {comments} in {taskName}
    </li>
  );
}

export default ConditionalRendering;
