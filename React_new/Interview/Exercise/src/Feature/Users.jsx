const Users = () => {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 },
  ];
  return (
    <div>
      {users.map((item) => {
        return <h2 key={item.id}>{item.name}</h2>;
      })}
    </div>
  );
};

export default Users;
