const Todos = (props) => {
  const {todo, active, filter, setEditItem, setDeleteItem} = props;
  const deleteTodo = (id)=>{
    console.log("delete", id);
  }

  const todos = [];
  todo.forEach(element => {
    if(active && element._id!==active)
      return;
    element.document.forEach(item=>{
      if(item.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())==-1)
        return
        todos.push(item)
    })
  });
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
                <th scope="col">description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                todo &&
                todos.map((item, index)=>(
                  <tr key={item._id} className="table-item" style={{ cursor: "pointer" }}>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td>
                    <div style={{ 
                      background: 
                        (item.status=="complate")? "#0f0": 
                          (item.status=="todo")? "#ff0": 
                            (item.status=="none")? "#adb5bd":"#f00" }} className="btn">
                      {item.status}
                    </div>
                  </td>
                  <td>{new Date(item.didline).toLocaleDateString() +"-"+ new Date(item.didline).getHours()+":"+new Date(item.didline).getMinutes()}</td>
                  <td>{new Date(item.dateCreated).toLocaleDateString() +"-"+ new Date(item.dateCreated).getHours()+":"+new Date(item.dateCreated).getMinutes()}</td>
                  <td>{item.subitem}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <div className="col">
                        <button className="col btn btn-primary" onClick={()=>setEditItem(item)}>
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn btn-danger" onClick={()=>setDeleteItem(item)}>
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
