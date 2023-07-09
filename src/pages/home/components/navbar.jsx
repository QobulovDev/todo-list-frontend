import profilImg from "../../../assets/profil.png";
const Navbar = () => {
    return (
        <>
            <nav className="bg-light py-2">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 className="logo pt-2">
              <a href="/" className="text-dark" style={{textDecoration: 'none'}}>
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
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Profil
                </h5>
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
                  <a href="/">Profil</a>
                </li>
                <li className="list-group-item">
                  <a href="/">Setting</a>
                </li>
                <li className="list-group-item">
                  <a href="/">Reset password</a>
                </li>
                <li className="list-group-item">
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
}

export default Navbar;
