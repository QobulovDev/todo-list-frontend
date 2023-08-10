import axios from "axios";
import { toast } from "react-toastify";
const DeleteItem = (props) => {
  const { deleteItem, setDeleteItem, getData } = props;
  if(!deleteItem) return <></>;
    const deleteHandler = async () => {
        try {
            await axios.request({
              method: "delete",
              url: `https://todo-list-7u69.onrender.com/api/todo/${deleteItem._id}`,
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("authToken"),
              }
            })
            .then(res=>{
              if(res.status==200){
                  toast.success('delete success')
                  getData()
                  setDeleteItem("")
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
      <div className="modal d-block" tabIndex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete item</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setDeleteItem("")}
              ></button>
            </div>
            <div className="modal-body">
              <p>Delete "{deleteItem.name}" ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>setDeleteItem("")}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={deleteHandler}>
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteItem;
