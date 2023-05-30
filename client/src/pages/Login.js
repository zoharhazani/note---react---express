import "App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPasswords] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    handleLogin();

    document.getElementById("user-name").value = "";
    document.getElementById("password").value = "";
  };

  async function handleLogin() {

    const userDetails = {
      username: userName,
      password: password,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {

        const data = await response.json();

        if (data.isValid) {

          //handle saving token to the local storage 
          var token = data.token;
          localStorage.setItem("token", token);

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
