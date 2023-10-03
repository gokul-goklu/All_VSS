export default function Child1(myprop) {
  return (
    <div>
      <button onClick={myprop.toggleMessage}>Toggle me</button>
    </div>
  );
}
