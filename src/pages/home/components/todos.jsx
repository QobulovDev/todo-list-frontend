const Todos = (props) => {
  const {todo, setTodo} = props;
  console.log(todo);
    return (
        <>
            <table className="table table-hover table-striped table-bordered ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">status</th>
                <th scope="col">didline</th>
                <th scope="col">created date</th>
                <th scope="col">subitem</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                todo &&
                todo.map((item, index)=>(
                  <tr key={item._id} className="table-item" style={{ cursor: "pointer" }} onClick={()=>console.log(1)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <th scope="row">{index+1}</th>
                  <td>imtihon</td>
                  <td>
                    <div style={{ background: "#0f0" }} className="btn">
                      complate
                    </div>
                  </td>
                  <td>-</td>
                  <td>10.07.2023</td>
                  <td>-</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <div className="col">
                        <button className="col btn btn-primary">
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn btn-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                ))
              }             
            </tbody>
          </table>
        </>
    )
}

export default Todos;
