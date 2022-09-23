// Write your solution in this file!

const employee = {
  name: "Rachel",
  streetAddress: "1639 S Utica St.",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {...employee, [key]: value};
};

const employees = updateEmployeeWithKeyAndValue(employee, "streetAddress", "1638 S Utica St.");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;

return employee;
}

const desEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "1638 S Utica St.")

function deleteFromEmployeeByKey (employee, key) {
  let newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}