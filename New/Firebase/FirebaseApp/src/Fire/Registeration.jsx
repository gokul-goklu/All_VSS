export default function Registeration() {
  return (
    <body>
      <h2>Registration Form</h2>
      <form action="submit_registration.php" method="POST">
        <div>
          <label>Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </body>
  );
}
