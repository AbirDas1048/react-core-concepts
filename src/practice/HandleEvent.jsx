export default function HandleEvent() {
  function clickOne() {
    alert("click button one");
  }
  const clickTwo = () => {
    alert("click button two");
  };

  function clickFour(num) {
    alert(num + 5);
  }

  return (
    <>
      <div>
        <h1>Please click</h1>
        <button onClick={clickOne}>CLick One</button>
        <button onClick={clickTwo}>CLick Two</button>
        <button
          onClick={() => {
            alert("click button three");
          }}
        >
          CLick Three
        </button>

        <button onClick={() => clickFour(5)}>CLick Four</button>
      </div>
    </>
  );
}
