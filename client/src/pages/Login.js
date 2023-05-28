import "App.css";
import { useState } from "react";
import Edit from "./Edit";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPasswords] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    async function sendDetailsToDB() {
      const userDetails = {
        username: userName,
        password: password,
      };
      try {
        const response = await fetch("/api/getUserDetail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });

        if (response.ok) {
          const isValid = await response.json();
          if (isValid) {
            navigate("/Edit");
          } else {
            alert("please enter correct user name or password");
            setUserName("");
            setPasswords("");
          }
          console.log("Data sent successfully");
        } else {
          console.error("Server error:", response.status);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }

    sendDetailsToDB();

    document.getElementById("user-name").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit}>
        <label className="labelLogin">User Name</label>
        <br />
        <br />
        <input
          type="text"
          className="inputTxt"
          id="user-name"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br />
        <br />
        <label className="labelLogin">Password</label>
        <br />
        <br />
        <input
          type="password"
          className="inputTxt"
          id="password"
          onChange={(e) => setPasswords(e.target.value)}
        ></input>
        <br />
        <br />
        <button className="login-btn size-btn-login " type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
