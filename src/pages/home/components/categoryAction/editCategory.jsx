import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const EditCategory = (props) => {
  const { editCategory, setEditCategory, getData } = props;
  if (!editCategory) return <></>;
  const [categoryItem, setCategoryItem] = useState({
    name: editCategory.name
  })
  const inputHandler = (e) =>{
    setCategoryItem({...categoryItem, [e.target.name]: e.target.value})
  }
  const closeWin = ()=>{
    setEditCategory("")
  }
  const editCategoryHandler = async () => {
    if(categoryItem.name.length < 3) return toast.error("name is invalid")
    try {
      await axios.request({
          method : "put",
          url : `https://todo-list-7u69.onrender.com/api/category/${editCategory._id}`,
          headers : {
          "Content-Type":"application/json", 
          "x-auth-token": localStorage.getItem('authToken') 
          },
          data : JSON.stringify({
              "userId": localStorage.getItem("userId"),
              "name": categoryItem.name,
          })
      }).then(res=>{
          if(res.status==200){
              toast.success("category edited success")
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
              <h5 className="modal-title"> Edit category</h5>
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
                    value={categoryItem.name}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={editCategoryHandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
