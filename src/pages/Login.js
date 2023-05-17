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

    var inputUserName = userName;
    var inputPassword = password;

    if (!inputValidation(inputUserName, inputPassword)) {
      alert("please enter correct user name or password");
      setUserName("");
      setPasswords("");
    } else {
      navigate("/Edit");
    }

    document.getElementById("user-name").value = "";
    document.getElementById("password").value = "";
  };
  function inputValidation(inputUserName, inputPassword) {
    if (inputUserName != "admin" || inputPassword != "123") {
      return false;
    }
    return true;
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
