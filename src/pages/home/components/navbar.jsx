import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profilImg from "../../../assets/profil.png";

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const {setUser, user, setUserToken, setIsViewCateg} = props;
  const navigate = useNavigate()
  const logout = ()=>{
    setUser({})
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    setUserToken("")
    navigate("/login");
  }
  return (
    <>
      <nav className="bg-light py-2">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 className="logo pt-2">
              <a
                href="/"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-list-check"></i> TODO list
              </a>
            </h2>
            <button
              className="btn "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                src={profilImg}
                className="rounded-circle profil-img"
                alt="profil"
              ></img>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasRightLabel">
                  {user?.name}
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link to='/pofil'>Profil</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to='/pofil'>Setting</Link>
                  </li>
                  <li className="list-group-item"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={()=>setIsViewCateg(true)}>
                    <div style={{color: '#00f', textDecoration: 'underline', cursor: 'pointer'}}>View category list</div>
                  </li>
                  <li className="list-group-item" onClick={logout}>
                    <a href="/">Log out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
