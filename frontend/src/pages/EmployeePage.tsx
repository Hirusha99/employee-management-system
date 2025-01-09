import EmployeeTable from "../components/EmployeeTable";

const EmployeePage = () => {
  const addEmployee = () => {
    console.log("Add new employee");
  };

  return (
    <div>
      <p className="h2 text-center m-5">Employee Management System</p>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-success m-5"
          onClick={addEmployee}
        >
          New Employer
        </button>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default EmployeePage;
