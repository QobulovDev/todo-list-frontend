import { useState } from "react";
import AddCategory from "./addCategory";
import { toast } from "react-toastify";
import axios from "axios";

const AddWindow = ({ category, setCategory, addWin, setAddWin, getData }) => {
  const [addCaredoryWin, setAddCaredoryWin] = useState(false);
    const [addTodo, setAddTodo] = useState({
        name: "",
        status: "",
        didline: "",
        subitem: "",
        categoryId: ""
    })
    const inputHandler = (e)=>{
        setAddTodo({
            ...addTodo,
            [e.target.name]: e.target.value
        })
    }
    const submitTodoHandler = async()=>{
        if(addTodo.name.length < 3) return toast.error("name is invalid")
        if(!addTodo.status) return toast.error("status is invalid")
        if(!addTodo.categoryId || addTodo.categoryId=="none") return toast.error("select category")

        try {
            await axios.request({
                method : "post",
                url : `http://localhost:5500/api/todo/`,
                headers : {
                "Content-Type":"application/json", 
                "x-auth-token": localStorage.getItem('authToken') 
                },
                data : JSON.stringify({
                    "userId": localStorage.getItem("userId"),
                    "name": addTodo.name,
                    "status": addTodo.status,
                    "didline": addTodo.didline,
                    "subitem": addTodo.subitem,
                    "categoryId": addTodo.categoryId,
                })
            }).then(res=>{
                if(res.status==200){
                    toast.success("todo added success")
                    closeHandler()
                    getData()
                }
            }).catch(err=>{
                toast.error(err.response.data)
            })
        } catch (error) {
            toast.error(error.response.data)
        }
    } 
  const closeHandler = () => {
    setAddTodo({
        name: "",
        status: "",
        didline: "",
        subitem: "",
        categoryId: ""
    })
    setAddWin(false);
  };
  if (!addWin) return <></>;
  return (
    <>
      <AddCategory
        addCaredoryWin={addCaredoryWin}
        setAddCaredoryWin={setAddCaredoryWin}
        getData={getData}
      />
      <div className="modal d-block" tabIndex="-1" style={{ zIndex: 6 }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add todo</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeHandler}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitTodoHandler}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setAddCaredoryWin(true)}
                  >
                    Add Category
                  </button>
                <div className="mb-3">
                  <label htmlFor="categoryId" className="form-label">
                    select category
                  </label>
                  <select className="form-select" id="categoryId" name="categoryId" onChange={inputHandler}>
                  <option defaultChecked value="none" className="text-body">--- Select category ----</option>
                    {
                        category?.legth == 0 ? 
                        <option value="none">There is no category</option>: 
                        category.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))
                    }
                    </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={addTodo.name}
                    placeholder="todo name"
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select className="form-select" id="status" onChange={inputHandler} name="status" defaultValue="none">
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
                    value={addTodo.didline}
                    className="form-control"
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
                    value={addTodo.subitem}
                    className="form-control"
                    placeholder="Discraption"
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
                onClick={closeHandler}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={submitTodoHandler}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWindow;
