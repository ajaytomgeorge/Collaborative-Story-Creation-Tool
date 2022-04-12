import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "../css/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errorText,setErrorText] = useState("");
  function validateForm() {
    return email.length > 4 && password.length > 4;
  }

  const navigate = useNavigate();

  function handleSubmit(event) {

    event.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    fetch("http://localhost:8080/auth/login", requestOptions)
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
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{errorText}</p>
      </Alert>
    );
  }
  
  return (
    <div className="auth_wrapper">
      <div className="auth_inner">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          {show && <AlertDismissible errorText={errorText} />}
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!validateForm()}
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="/home">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
