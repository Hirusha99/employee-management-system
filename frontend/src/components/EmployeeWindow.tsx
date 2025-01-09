const EmployeeWindow = () => {


  return (

      <div className="modal-dialog">
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add employee name here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Add employee salary here"
          ></input>
        </div>
        <button type="button" className="btn btn-success">
          Submit
        </button>
      </div>

  );
};

export default EmployeeWindow;
