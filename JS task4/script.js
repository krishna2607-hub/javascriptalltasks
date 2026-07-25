// Task 1 Student Registration Form

let studentName = "krishna";
let age = 22;
let department = "Computer Science";
let cgpa = 8.1;

console.log("Task 1");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Department:", department);
console.log("CGPA:", cgpa);


// Task 2 Employee Details

let employee = {
    employeeId: 107,
    employeeName: "poorna",
    department: "HR",
    salary: 50000
};

console.log("Task 2");
console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);


// Task 3 Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("Task 3");
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);


// Task 4 Student Marks

let subject1 = 85;
let subject2 = 90;
let subject3 = 78;
let subject4 = 88;
let subject5 = 95;

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let averageMarks = totalMarks / 5;

console.log("Task 4");
console.log("Total:", totalMarks);
console.log("Average:", averageMarks);


// Task 5 Age Checker

let voterAge = 19;

console.log("Task 5");

if (voterAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}


// Task 6 Login System

let username = "admin";
let password = "12345";

console.log("Task 6");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// Task 7 Calculator

let num1 = 20;
let num2 = 5;

console.log("Task 7");
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);


// Task 8 Electricity Bill

let customerName = "lokesh";
let units = 180;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Task 8");
console.log("Customer Name:", customerName);
console.log("Units:", units);
console.log("Bill Amount:", bill);


// Task 9 Employee Salary

let basicSalary = 40000;
let bonus = 5000;
let grossSalary = basicSalary + bonus;

console.log("Task 9");
console.log("Gross Salary:", grossSalary);


// Task 10 Movie Ticket Price

let ticketPrice = 250;
let numberOfTickets = 4;
let totalAmount = ticketPrice * numberOfTickets;

console.log("Task 10");
console.log("Total Amount:", totalAmount);


// Task 11 Product Discount

let productName = "macbook";
let price = 60000;
let discount;
let finalPrice;

if (price > 5000) {
    discount = price * 0.20;
} else {
    discount = price * 0.10;
}

finalPrice = price - discount;

console.log("Task 11");
console.log("Product Name:", productName);
console.log("Original Price:", price);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);


// Task 12 Function Practice

function studentDetails(name, department, cgpa) {
    console.log("Task 12");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

studentDetails("srujana", "cybersecurity", 9.1);


// Task 13 Bank Balance

let accountHolder = "srija";
let currentBalance = 50000;
let withdrawAmount = 8000;
let remainingBalance = currentBalance - withdrawAmount;

console.log("Task 13");
console.log("Account Holder:", accountHolder);
console.log("Remaining Balance:", remainingBalance);


// Task 14 Mobile Recharge

let mobileNumber = "6281524414";
let rechargeAmount = 399;

console.log("Task 14");
console.log("Recharge Successful");
console.log("Mobile Number:", mobileNumber);
console.log("Recharge Amount:", rechargeAmount);


// Task 15 Restaurant Bill

let foodName = "burger";
let quantity = 3;
let foodPrice = 250;
let totalBill = quantity * foodPrice;

console.log("Task 15");
console.log("Food Name:", foodName);
console.log("Quantity:", quantity);
console.log("Price:", foodPrice);
console.log("Total Bill:", totalBill);


// Mini Project Employee Management System

let employeeInfo = {
    id: 201,
    name: "prasad",
    department: "Software",
    experience: 4
};

let employeeSkills = ["JavaScript", "HTML", "CSS", "React"];

let employeeBasicSalary = 50000;
let employeeBonus = 7000;
let employeeGrossSalary = employeeBasicSalary + employeeBonus;

console.log("Mini Project");

function displayEmployee() {
    console.log("Employee ID:", employeeInfo.id);
    console.log("Employee Name:", employeeInfo.name);
    console.log("Department:", employeeInfo.department);
    console.log("Skills:", employeeSkills);
    console.log("Gross Salary:", employeeGrossSalary);

    if (employeeInfo.experience >= 3) {
        console.log("Experienced Employee");
    } else {
        console.log("Fresher Employee");
    }
}

displayEmployee();