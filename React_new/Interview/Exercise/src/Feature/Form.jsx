import { useState } from "react";
const Form = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmit, setIssubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIssubmit(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
      {isSubmit ? (
        <div>
          <h3>{mail}</h3>
          <h3>{pass}</h3>
        </div>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default Form;
