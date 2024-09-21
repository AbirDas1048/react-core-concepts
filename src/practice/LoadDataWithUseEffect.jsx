import { useEffect, useState } from "react";
import User from "./User";

export default function LoadDataWithUseEffect() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <p>Total users = {users.length}</p>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
