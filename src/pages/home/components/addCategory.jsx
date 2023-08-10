import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddCategory = (props) => {
  const { addCaredoryWin, setAddCaredoryWin, getData } = props;
  const [categoryName, setCategoryName] = useState("");
  const addCategoryHadler = async () => {
    if (categoryName.length < 3)
      return toast.error("category name must be more than 3 characters long");
    try {
      await axios.request({
        method: "post",
        url: `https://todo-list-7u69.onrender.com/api/category`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("authToken"),
        },
        data : JSON.stringify({
            "userId": localStorage.getItem("userId"),
            "name": categoryName
        })
      })
      .then(res=>{
        if(res.status==200){
            toast.success('added success')
            getData()
            closeWin()
            setCategoryName("")
        }
      })
      .catch(err=>{
        toast.error(err.response.data)
      })
    } catch (err) {
      toast.error(err);
    }
  };
  const closeWin = () => {
    setCategoryName("")
    setAddCaredoryWin(false);
  };
  if (!addCaredoryWin) return <></>;
  return (
    <div className="modal d-block" tabIndex="-1" style={{ zIndex: 100 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add category</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeWin}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={addCategoryHadler}>
              <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">
                  Category name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="category name"
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
              onClick={addCategoryHadler}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
