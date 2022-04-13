import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errorText,setErrorText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [errorInfo, setErrorInfo] = useState(
    "Invalid Credentials. Please retry"
  );

  const navigate = useNavigate();

  function validateForm() {
    return email.length > 4 && password.length > 4;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, email, password }),
    };
    fetch("/auth/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if("error" in data){
          setErrorText(data["error"])
          setShow(true);
        }else{
          console.log(data.success.user.token);
          navigate('/')
        }
      });
  }

  // eslint-disable-next-line react/prop-types
  function AlertDismissible({ errorText }) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{errorText}</p>
      </Alert>
    );
  }

  return (
    <div className="auth_wrapper">
      <div className="auth_inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {show && <AlertDismissible errorText={errorText} />}
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!validateForm()}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered?<a href="/login"> sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
