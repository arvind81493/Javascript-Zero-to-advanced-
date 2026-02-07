const Employees = {
    name: "John",
    age: 30,
    city: "New York",

    address:{
        street: "123 Main St",
        colony: "Downtown"
    }
}
for (let key in Employees) {
    console.log(key, Employees[key]);
}

for (let key in Employees.address) {
    console.log(key, Employees.address[key]);
}