export default function ChildCallback(myporp) {
  return (
    <div>
      <h3>Iam child</h3>
      <button onClick={myporp.toggle}>Toggle me</button>
    </div>
  );
}
