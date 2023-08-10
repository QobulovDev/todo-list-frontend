import { useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";

const Edit = (props) => {
  const {editItem, setEditItem, getData} = props;
  if(!editItem) return <></>
  const [todoItem, setTodoItem] = useState({
    name: editItem.name,
    status: editItem.status,
    didline: editItem.didline,
    subitem: editItem.subitem
  })
  const inputHandler = (e) =>{
    setTodoItem({...todoItem, [e.target.name]: e.target.value})
  }
  const closeWin = ()=>{
    setEditItem("")
  }
  const editHandler = async () => {
    if(todoItem.name.length < 3) return toast.error("name is invalid")
    if(!todoItem.status) return toast.error("status is invalid")
    try {
      await axios.request({
          method : "put",
          url : `https://todo-list-7u69.onrender.com/api/todo/${editItem._id}`,
          headers : {
          "Content-Type":"application/json", 
          "x-auth-token": localStorage.getItem('authToken') 
          },
          data : JSON.stringify({
              "userId": localStorage.getItem("userId"),
              "name": todoItem.name,
              "status": todoItem.status,
              "didline": todoItem.didline,
              "subitem": todoItem.subitem,
              "categoryId": editItem.categoryId,
          })
      }).then(res=>{
          if(res.status==200){
              toast.success("todo added success")
              closeWin()
              getData()
          }
      }).catch(err=>{
          toast.error(err.response.data)
      })
  } catch (error) {
      toast.error(error.response.data)
  }
  }
  return (
    <>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Edit todo</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeWin}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="todo name"
                    name="name"
                    value={todoItem.name}
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select className="form-select" id="status" name="status" onChange={inputHandler} defaultValue={todoItem.status}>
                    <option value="none">None</option>
                    <option value="complate">Complate</option>
                    <option value="todo">ToDo</option>
                    <option value="fail">Fail</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="didline" className="form-label">
                    Didline
                  </label>
                  <input
                    type="date"
                    name="didline"
                    id="didline"
                    className="form-control"
                    value={new Date(todoItem.didline).toISOString().substr(0, 10)}
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subitem" className="form-label">
                    Discraption
                  </label>
                  <input
                    type="text"
                    name="subitem"
                    id="subitem"
                    className="form-control"
                    placeholder="Discraption"
                    value={todoItem.subitem}
                    onChange={inputHandler}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeWin}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={editHandler}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
