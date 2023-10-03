export default function ChildForm(myprop) {
  return (
    <div>
      <label>name: </label>
      {myprop.name}
      <br></br>
      <label>City: </label>
      {myprop.city}
    </div>
  );
}
