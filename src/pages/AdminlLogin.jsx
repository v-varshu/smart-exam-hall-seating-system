import { useState } from "react";

function AdminLogin({ goHome }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    alert("Staff Login Successful");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#edf3fa"
    }}>

      <div style={{
        width: "350px",
        padding: "35px",
        background: "white",
        borderRadius: "12px"
      }}>

        <h2>Staff Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleLogin}>
          Login
        </button>

        <br /><br />

        <button onClick={goHome}>
          Back
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;