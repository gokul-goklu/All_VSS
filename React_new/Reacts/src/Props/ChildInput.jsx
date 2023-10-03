export default function ChildInput(myprop) {
  return (
    <div>
      <input type="text" onChange={(e) => myprop.HandleName(e.target.value)} />
    </div>
  );
}
