import "../css/SignUp.css";

export default function SignUp() {
  return (
    <div className="auth_wrapper">
      <div className="auth_inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
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