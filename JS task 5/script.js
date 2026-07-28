// Task 1 - Student Registration

let studentName = "krishna";
let department = "CSE";
let cgpa = 8.1;

console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("CGPA :", cgpa);
console.log("Status :", cgpa >= 8 ? "Eligible" : "Not Eligible");


// Task 2 - Online Shopping Bill

let productPrice = 2500;
let quantity = 3;

let total = productPrice * quantity;
let discount = total > 5000 ? total * 0.10 : 0;
let finalPrice = total - discount;

console.log("Total :", total);
console.log("Discount :", discount);
console.log("Final Price :", finalPrice);


// Task 3 - Employee Salary

let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Net Salary :", netSalary);


// Task 4 - Movie Ticket Booking

let movie = "chennai love story";
let ticketPrice = 180;
let tickets = 5;

console.log("Movie :", movie);
console.log("Tickets :", tickets);
console.log("Total :", ticketPrice * tickets);


// Task 5 - Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}


// Task 6 - Electricity Bill

let units = 250;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill :", bill);


// Task 7 - Restaurant Order

let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item :", menu[0]);
console.log("Last Item :", menu[menu.length - 1]);
console.log("Total Items :", menu.length);

menu.push("Fried Rice");
menu.splice(menu.indexOf("Idly"), 1);

console.log("Updated Menu :", menu);


// Task 8 - Employee Object

let employee = {
    name: "perugu",
    role: "Frontend Developer",
    salary: 50000
};

console.log("Employee Name :", employee.name);
console.log("Role :", employee.role);
console.log("Salary :", employee.salary);


// Task 9 - Product Inventory

let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "CPU",
    "Speaker"
];

for (let i = 0; i < products.length; i++) {
    console.log(i + 1, products[i]);
}


// Task 10 - Function

function calculateArea(length, width) {
    console.log("Area =", length * width);
}

calculateArea(20, 10);


// Task 11 - Bank Deposit

let balance = 5000;

function deposit(amount) {
    balance += amount;
}

function withdraw(amount) {
    balance -= amount;
}

deposit(2000);
withdraw(1000);

console.log("Final Balance :", balance);


// Task 12 - Callback Function

function addition(a, b) {
    return a + b;
}

function calculate(callback, a, b) {
    console.log(callback(a, b));
    console.log("Calculation Completed");
}

calculate(addition, 10, 20);


// Task 13 - Generator Function

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 14 - Currying

function discountValue(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discountValue(10)(20)(30));


// Task 15 - Spread Operator

let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);


// Task 16 - Rest Operator

function sum(...numbers) {
    let totalSum = 0;

    for (let num of numbers) {
        totalSum += num;
    }

    return totalSum;
}

console.log(sum(10, 20, 30, 40, 50));


// Task 17 - Array Destructuring

let colors = ["Red", "Blue", "Green", "Yellow"];

let [color1, color2, color3, color4] = colors;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);


// Task 18 - Object Destructuring

let user = {
    name: "roopa",
    city: "bengaluru",
    role: "Developer"
};

let { name, city, role } = user;

console.log(name);
console.log(city);
console.log(role);


// Task 19 - Shopping Cart

let cart = ["Mobile", "Laptop", "Watch"];

console.log(cart);

cart.push("Tablet");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Headphone");
console.log(cart);


// Task 20 - Product Search

let items = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

if (items.includes("Monitor")) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}