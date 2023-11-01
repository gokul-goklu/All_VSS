import Childing from "./Childing";

const Parenting = () => {
  const getData = (data) => {
    console.log("iam done", data);
  };
  return (
    <div>
      <h2>child to parent</h2>
      <Childing onSubmit={getData} />
    </div>
  );
};

export default Parenting;
