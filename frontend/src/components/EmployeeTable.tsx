const EmployeeTable = () => {
  const employees = [
    { id: 1, name: "john", salary: 50000 },
    { id: 2, name: "sam", salary: 59000 },
  ];

  const editButton=()=>{
    console.log("edit")
  }

  const deleteButton=()=>{
    console.log("delete")
  }

  return (
    <div >
      <h1 className="display-6 ms-5">Employee Deatils</h1>
      <div className="text-center">
        <table className="table table-hover m-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                <td>
                  <button type="button" className="btn btn-warning m-1" onClick={editButton}>
                    Edit
                  </button>{" "}
                  <button type="button" className="btn btn-danger m-1" onClick={deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
