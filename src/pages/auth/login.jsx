import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { filterEmail } from "../../config/filterInput";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Login = ({ setUserToken, setUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (
      !userData.email ||
      userData.email.length < 4 ||
      !filterEmail.test(userData.email)
    )
      return toast.error("Email is invalid");
    if (!userData.password || userData.password.length < 6)
      return toast.error("Password is invalid");

    const config = {
      method: "post",
      // url: `http://localhost:5500/api/auth`,
      url: `https://todo-list-7u69.onrender.com/api/auth`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    };

    try {
      await axios(config)
        .then((res) => {
          if (res.status === 200) {
            const token = res.data.authToken;
            localStorage.setItem("authToken", token);
            localStorage.setItem('userId', res.data._id);
            setUser({
              userId: res.data._id,
              name: res.data.name
            })
            setUserToken(token);
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-1"></div>
          <div className="col-md-6 col-sm-10 align-items-center mt-5">
            <div className="card ">
              <div className="card-header">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <span>
                      I don`t have an account{" "}
                      <Link to={"/regis"}>Registration</Link> page
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-1"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
