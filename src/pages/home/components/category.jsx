const Category = (props) => {
  // eslint-disable-next-line react/prop-types
  const {category, active, setActive, setAddWin,filter, setFilter} = props;
  const filterHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="category d-flex justify-content-between mt-2 pb-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <button className={(active=="") ? "nav-link active": "nav-link"}
            onClick={()=>setActive("")}>All</button>
          </li>
          {
            category.map(item =>(
                <li className="nav-item" key={item._id}>
                  <button className={(active==item._id)? "nav-link active": "nav-link"}
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
          <form className="d-flex" role="search" onSubmit={filterHandler}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>setFilter(e.target.value)}
              value={filter}
            />
            <button className="btn btn-outline-success" type="submit" onClick={filterHandler}>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Category;
