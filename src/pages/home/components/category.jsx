const Category = () => {
    return (
        <>
            <div className="category d-flex justify-content-between mt-2 pb-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <button className="nav-link active">All</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        </>
    );
}

export default Category;
