export default function RenderComponentWithMap({ singer }) {
  return (
    <>
      <div>
        <h3>Name: {singer.name}</h3>
        <p>Best song: {singer.song}</p>
        <p>Age: {singer.age}</p>
      </div>
    </>
  );
}
