const ViewCategory = (props) => {
  const { 
    isViewCateg, 
    setIsViewCateg, 
    category,
    setDeleteCategory,
    setEditCategory
  } = props;

  if (!isViewCateg) return <></>;
  return (
    <>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View category list</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setIsViewCateg(false)}
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-hover table-striped table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {category &&
                    category.map((item, index) => (
                      <tr
                        key={item._id}
                        className="table-item"
                        style={{ cursor: "pointer" }}
                      >
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>
                          <div className="d-flex justify-content-around">
                            <div className="col">
                              <button className="col btn btn-primary" onClick={()=>setEditCategory(item)}>
                                <i className="bi bi-pencil-square"></i>
                              </button>
                            </div>
                            <div className="col">
                              <button className="btn btn-danger" onClick={()=>setDeleteCategory(item)}> 
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>setIsViewCateg(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCategory;
