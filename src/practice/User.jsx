export default function User({ user }) {
  const { name, email } = user;
  return (
    <div
      style={{
        border: "2px solid tomato",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
