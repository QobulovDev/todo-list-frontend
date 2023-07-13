const Category = (props) => {
  // eslint-disable-next-line react/prop-types
  const {category, setCategory, active, setActive, setAddWin} = props;
  return (
    <>
      <div className="category d-flex justify-content-between mt-2 pb-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <button className="nav-link active">All</button>
          </li>
          {
            category.map(item =>(
                <li className="nav-item" key={item._id}>
                  <button className="nav-link"
                    onClick={()=>setActive(item._id)}>
                    {item.name}
                  </button>
                </li>
              )
            )
          }
        </ul>
        <div className="d-flex">
          <button type="button" className="btn btn-primary me-2" onClick={()=>setAddWin(true)}>Add todo</button>
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
      </div>
    </>
  );
};

export default Category;
