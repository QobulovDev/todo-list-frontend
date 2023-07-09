import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { filterEmail } from "../../config/filterInput";

// eslint-disable-next-line react/prop-types
const Regis = ({setUserToken}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    rePass: "",
  });
  const inputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (
      userData.email.length < 4 ||
      !filterEmail.test(userData.email)
    )
      return toast.error("Email is invalid");
    if (!userData.name)
      return toast.error("Name is invalid");
    if (!userData.password || userData.password.length < 6)
      return toast.error("Password is invalid");
    if (userData.password !== userData.rePass)
      return toast.error("Password and Conforim password not equil");
    // axios.post('https://todo-list-19zv.onrender.com/api/user',{
    //     name: userData.name,
    //     email: userData.email,
    //     password: userData.password
    // }).then((respons)=>{
    //     if(respons.status!=200){
    //         toast.error(respons.data);
    //     }else{
    //         const token = respons.headers.get('x-auth-token'); 
    //         window.localStorage.setItem("authToken", token);
    //         setUserToken(token)
    //         navigate("/home");
    //     }
    // }).catch((err)=>{
    //     console.log(err)
    //     toast.error(err)

    // })

    fetch("https://todo-list-19zv.onrender.com/api/user", {
        mode: 'no-cors',
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            password: userData.password
        })
    })
    .then( (response) => {
            console.log(response);
        //do something awesome that makes the world a better place
    }).catch(err=>{
        console.log(err);
        toast.error(err)
    })
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-3 col-sm-1"></div>
        <div className="col-md-6 col-sm-10 align-items-center mt-5">
          <div className="card ">
            <div className="card-header">
              <h3 className="text-center">Registration</h3>
            </div>
            <div className="card-body">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <label htmlFor="repass" className="form-label">
                    Conforim password
                  </label>
                  <input
                    type="password"
                    name="rePass"
                    className="form-control"
                    id="repass"
                    placeholder="Enter your password"
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <span>
                    I have an accaunt, visit <Link to={"/"}>Login</Link> page.
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
  );
};

export default Regis;
