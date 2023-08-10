import axios from "axios";
import { toast } from "react-toastify";

const DeleteCategory = (props) => {
  const { deleteCategory, setDeleteCategory, getData } = props;
  if (!deleteCategory) return <></>;
  const deleteCategoryhandler = async () => {
    try {
        await axios.request({
          method: "delete",
          url: `https://todo-list-7u69.onrender.com/api/category/${deleteCategory._id}`,
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("authToken"),
          }
        })
        .then(res=>{
          if(res.status==200){
              toast.success('delete success')
              getData()
              setDeleteCategory("")
          }
        })
        .catch(err=>{
          toast.error(err.response.data)
        })
      } catch (err) {
        toast.error(err);
      }
  } 
  return (
    <>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete category</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setDeleteCategory("")}
              ></button>
            </div>
            <div className="modal-body">
              <p>delete "{deleteCategory.name}" ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>setDeleteCategory("")}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"
              onClick={deleteCategoryhandler}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCategory;
