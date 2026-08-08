// Task 1: Student Registration

function studentRegistration() {
    let student = {
        name: "krishna",
        age: 20,
        department: "Computer Science",
        courseFee: 25000
    };

    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("Course Fee:", student.courseFee);

    if (student.age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}


// Task 2: Employee Salary Calculator

function salaryCalculator() {
    let basicSalary = Number(prompt("Enter Basic Salary:"));
    let bonus = Number(prompt("Enter Bonus:"));
    let deduction = Number(prompt("Enter Deduction:"));

    let totalSalary = basicSalary + bonus - deduction;

    console.log("Total Salary =", totalSalary);
}


// Task 3: Shopping Cart

function shoppingCart() {
    let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

    cart.push("Webcam");

    cart.pop();

    console.log("Cart:", cart);
    console.log("Total Products:", cart.length);
    console.log("First Product:", cart[0]);
    console.log("Last Product:", cart[cart.length - 1]);
}


// Task 4: Login Validation

function loginValidation() {
    let storedUsername = "admin";
    let storedPassword = "12345";

    let username = prompt("Enter Username:");
    let password = prompt("Enter Password:");

    if (username === storedUsername && password === storedPassword) {
        console.log("Login Success");
    } else {
        console.log("Invalid Username or Password");
    }
}


// Task 5: Movie Ticket Booking

function movieTicket() {
    let age = Number(prompt("Enter Age:"));

    let result = age >= 18 ? "Eligible" : "Not Eligible";

    console.log(result);
}


// Task 6: Employee Search

function employeeSearch() {
    let employees = [
        { name: "kamal", salary: 25000 },
        { name: "kumar", salary: 40000 },
        { name: "Raja", salary: 55000 }
    ];

    let employee = employees.find(function(emp) {
        return emp.name === "Kavin";
    });

    console.log(employee);
}


// Task 7: Product Filter

function productFilter() {
    let products = [
        { name: "Mouse", price: 400 },
        { name: "Keyboard", price: 800 },
        { name: "USB Cable", price: 250 },
        { name: "Headphone", price: 450 }
    ];

    let result = products.filter(function(product) {
        return product.price < 500;
    });

    console.log(result);
}


// Task 8: Student Marks

function studentMarks() {
    let marks = [45, 56, 67, 89];

    let newMarks = marks.map(function(mark) {
        return mark + 5;
    });

    console.log(newMarks);
}


// Task 9: Attendance Checker

function attendanceChecker() {
    let marks = [90, 85, 70, 65];

    let result = marks.every(function(mark) {
        return mark > 50;
    });

    console.log(result);
}


// Task 10: OTP Generator

function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);

    console.log("OTP:", otp);
}


// Task 11: Password Strength Checker

function passwordChecker() {
    let password = prompt("Enter Password:");

    let minimumLength = password.length >= 8;
    let containsNumber = /[0-9]/.test(password);
    let containsUppercase = /[A-Z]/.test(password);
    let containsSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
        minimumLength &&
        containsNumber &&
        containsUppercase &&
        containsSpecialCharacter
    ) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }
}


// Task 12: Product Search

function productSearch() {
    let products = ["Laptop", "Mobile", "Watch", "Camera"];

    let search = prompt("Enter Product Name:");

    if (products.includes(search)) {
        console.log("Available");
    } else {
        console.log("Not Available");
    }
}


// Task 13: Current Digital Clock

function startClock() {
    setInterval(function() {
        let now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours === 0 ? 12 : hours;

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        console.log(
            hours + ":" +
            minutes + ":" +
            seconds + " " +
            ampm
        );
    }, 1000);
}


// Task 14: Countdown Timer

function countdownTimer() {
    let count = 10;

    console.log(count);

    let timer = setInterval(function() {
        count--;

        console.log(count);

        if (count === 0) {
            clearInterval(timer);
        }
    }, 1000);
}


// Task 15: Fake API Product Viewer

function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(product) {
                console.log("Image:", product.image);
                console.log("Name:", product.title);
                console.log("Price:", product.price);
            });
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
}


// Task 16: Employee Dashboard

function employeeDashboard() {
    let employees = [
        { name: "Arun", salary: 25000 },
        { name: "Kavin", salary: 40000 },
        { name: "Ravi", salary: 55000 }
    ];

    let totalSalary = employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);

    let averageSalary = totalSalary / employees.length;

    let highestSalary = employees.reduce(function(highest, employee) {
        return employee.salary > highest ? employee.salary : highest;
    }, 0);

    console.log("Total Salary:", totalSalary);
    console.log("Average Salary:", averageSalary);
    console.log("Highest Salary:", highestSalary);
}


// Task 17: Online Food Order

function foodOrder() {
    let menu = [
        { name: "Pizza", price: 250 },
        { name: "Burger", price: 150 },
        { name: "Shawarma", price: 120 },
        { name: "Fries", price: 100 }
    ];

    let order = [];

    order.push(menu[0]);
    order.push(menu[1]);
    order.push(menu[3]);

    order.pop();

    let totalItems = order.length;

    let totalBill = order.reduce(function(total, item) {
        return total + item.price;
    }, 0);

    console.log("Order:", order);
    console.log("Total Items:", totalItems);
    console.log("Total Bill:", totalBill);
}


// Task 18: Bank Account

function bankAccount() {
    let account = {
        accountHolder: "Rahul",
        balance: 10000,

        deposit: function(amount) {
            this.balance += amount;
        },

        withdraw: function(amount) {
            if (amount <= this.balance) {
                this.balance -= amount;
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance: function() {
            console.log("Balance:", this.balance);
        }
    };

    account.deposit(5000);
    account.withdraw(2000);
    account.checkBalance();
}


// Task 19: To-Do List

function todoList() {
    let tasks = [
        "Learn JavaScript",
        "Practice Arrays",
        "Complete Assignment"
    ];

    tasks.push("Learn Fetch API");

    tasks.splice(1, 1);

    tasks[0] = "Learn Advanced JavaScript";

    console.log("Tasks:", tasks);
}


// Task 20: Mini E-Commerce Product Management

function ecommerceManagement() {
    let products = [
        {
            name: "Laptop",
            price: 50000,
            category: "Electronics",
            stock: 5
        },
        {
            name: "Mobile",
            price: 20000,
            category: "Electronics",
            stock: 10
        },
        {
            name: "Shirt",
            price: 1000,
            category: "Clothing",
            stock: 20
        },
        {
            name: "Shoes",
            price: 2500,
            category: "Footwear",
            stock: 8
        }
    ];

    products.push({
        name: "fridge",
        price: 3000,
        category: "Accessories",
        stock: 15
    });

    let searchedProduct = products.find(function(product) {
        return product.name === "Mobile";
    });

    let electronics = products.filter(function(product) {
        return product.category === "Electronics";
    });

    let totalStock = products.reduce(function(total, product) {
        return total + product.stock;
    }, 0);

    let totalInventoryValue = products.reduce(function(total, product) {
        return total + product.price * product.stock;
    }, 0);

    console.log("Searched Product:", searchedProduct);
    console.log("Electronics Products:", electronics);
    console.log("Total Stock:", totalStock);
    console.log("Total Inventory Value:", totalInventoryValue);
}