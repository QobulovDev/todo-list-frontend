const Edit = () => {
    return (
        <>
            <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="todo name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" id="status">
                  <option value="1">Complate</option>
                  <option value="2">ToDo</option>
                  <option value="3">Fail</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="didline" className="form-label">Didline</label>
                <input type="date" name="didline" id="didline" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="subitem" className="form-label">Comment</label>
                <input type="text" name="subitem" id="subitem" className="form-control" placeholder="comment"/>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default Edit;
