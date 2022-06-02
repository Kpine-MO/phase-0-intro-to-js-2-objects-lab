// Write your solution in this file!
const employee = {
    name: 'Chris',
    age:'25',
    city:'Nairobi'

};
employee.gender='male';

function updateEmployeeWithKeyAndValue(obj,key,value) {
    return{
        ...obj,[key]:value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'city',
    'Kisumu'
);
employee;
newEmployee;


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  
  const obj = {name: 'Chris', age: '30', city: 'Mombasa'};
  destructivelyUpdateEmployeeWithKeyAndValue(obj,'name', 'Chris', 'city', 'Mombasa', 'age','30');

  function deleteFromEmployeeByKey(obj,key,value) {
    return{
        ...obj,[key]:value,
    };
}

const deleteEmployee = deleteFromEmployeeByKey(
    employee,
    'name',
    'Kris',
    'city',
    'Kisumu',
    'age',
    '20'
);
delete deleteEmployee.city;



function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
    obj[key] = value;
    return obj;
}

employee;
delete employee.age;


