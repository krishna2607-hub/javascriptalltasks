// Mini Projects using Date methods in JavaScript
// ---------------------------------------------------------
// Task 1 - Employee Onboarding System
// ---------------------------------------------------------

let empName = "krishna";

let joinDate = new Date();

// SET METHODS
joinDate.setFullYear(2025);
joinDate.setMonth(2);       // March
joinDate.setDate(17);
joinDate.setHours(9);
joinDate.setMinutes(0);
joinDate.setSeconds(30);

// GET METHODS
let jYear = joinDate.getFullYear();
let jMonth = joinDate.getMonth();
let jDate = joinDate.getDate();
let jDay = joinDate.getDay();
let jHours = joinDate.getHours();
let jMinutes = joinDate.getMinutes();
let jSeconds = joinDate.getSeconds();

console.log("Employee Name : " + empName);
console.log("Joining Year : " + jYear);
console.log("Joining Month : " + jMonth);
console.log("Joining Date : " + jDate);
console.log("Joining Day : " + jDay);
console.log("Joining Hours : " + jHours);
console.log("Joining Minutes : " + jMinutes);
console.log("Joining Seconds : " + jSeconds);
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 2 - Concert Ticket Booking System
// ---------------------------------------------------------

let concertName = "Rockwave Live";
let passPrice = 999;
let passCount = 4;

let concertDate = new Date();

concertDate.setFullYear(2026);
concertDate.setMonth(9);     // October
concertDate.setDate(3);
concertDate.setHours(19);
concertDate.setMinutes(0);
concertDate.setSeconds(0);

let cYear = concertDate.getFullYear();
let cMonth = concertDate.getMonth() + 1;
let cDate = concertDate.getDate();
let cDay = concertDate.getDay();
let cHours = concertDate.getHours();
let cMinutes = concertDate.getMinutes();
let cSeconds = concertDate.getSeconds();

let concertTotal = passPrice * passCount;

console.log("Concert Name : " + concertName);
console.log("Pass Price : " + passPrice);
console.log("Number of Passes : " + passCount);
console.log("Total Amount : " + concertTotal);
console.log("Show Year : " + cYear);
console.log("Show Month : " + cMonth);
console.log("Show Date : " + cDate);
console.log("Show Day : " + cDay);
console.log("Show Hours : " + cHours);
console.log("Show Minutes : " + cMinutes);
console.log("Show Seconds : " + cSeconds);
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 3 - Train Ticket Booking System
// ---------------------------------------------------------

let travellerName = "Meenu";
let trainName = "Chennai Express";
let fare = 650;

let journeyDate = new Date();

journeyDate.setFullYear(2026);
journeyDate.setMonth(10);    // November
journeyDate.setDate(12);
journeyDate.setHours(6);
journeyDate.setMinutes(45);
journeyDate.setSeconds(0);

let tYear = journeyDate.getFullYear();
let tMonth = journeyDate.getMonth() + 1;
let tDate = journeyDate.getDate();
let tDay = journeyDate.getDay();
let tHours = journeyDate.getHours();
let tMinutes = journeyDate.getMinutes();
let tSeconds = journeyDate.getSeconds();

console.log("Traveller Name : " + travellerName);
console.log("Train Name : " + trainName);
console.log("Fare : " + fare);
console.log("Journey Year : " + tYear);
console.log("Journey Month : " + tMonth);
console.log("Journey Date : " + tDate);
console.log("Journey Day : " + tDay);
console.log("Journey Hours : " + tHours);
console.log("Journey Minutes : " + tMinutes);
console.log("Journey Seconds : " + tSeconds);
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 4 - Resort Room Booking System
// ---------------------------------------------------------

let guestName = "porna";
let roomCategory = "Sea View Room";
let ratePerNight = 4500;
let nights = 3;

let checkInDate = new Date();

checkInDate.setFullYear(2026);
checkInDate.setMonth(11);   // December
checkInDate.setDate(24);
checkInDate.setHours(12);
checkInDate.setMinutes(0);
checkInDate.setSeconds(0);

let rYear = checkInDate.getFullYear();
let rMonth = checkInDate.getMonth();
let rDate = checkInDate.getDate();
let rDay = checkInDate.getDay();
let rHours = checkInDate.getHours();
let rMinutes = checkInDate.getMinutes();
let rSeconds = checkInDate.getSeconds();

let stayBill = ratePerNight * nights;

console.log("Guest Name : " + guestName);
console.log("Room Category : " + roomCategory);
console.log("Rate per Night : " + ratePerNight);
console.log("Number of Nights : " + nights);
console.log("Total Bill : " + stayBill);
console.log("Check-in Year : " + rYear);
console.log("Check-in Month : " + rMonth);
console.log("Check-in Date : " + rDate);
console.log("Check-in Day : " + rDay);
console.log("Check-in Hours : " + rHours);
console.log("Check-in Minutes : " + rMinutes);
console.log("Check-in Seconds : " + rSeconds);
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 5 - Pizza Delivery System
// ---------------------------------------------------------

let orderName = "Meena";
let itemName = "Farmhouse Pizza";
let itemPrice = 320;
let itemQty = 3;

let orderDate = new Date();

orderDate.setFullYear(2026);
orderDate.setMonth(8);      // September
orderDate.setDate(5);
orderDate.setHours(20);
orderDate.setMinutes(15);
orderDate.setSeconds(0);

let oYear = orderDate.getFullYear();
let oMonth = orderDate.getMonth() + 1;
let oDate = orderDate.getDate();
let oDay = orderDate.getDay();
let oHours = orderDate.getHours();
let oMinutes = orderDate.getMinutes();
let oSeconds = orderDate.getSeconds();

let orderTotal = itemPrice * itemQty;

console.log("Customer Name : " + orderName);
console.log("Item Name : " + itemName);
console.log("Item Price : " + itemPrice);
console.log("Quantity : " + itemQty);
console.log("Total Bill : " + orderTotal);
console.log("Delivery Year : " + oYear);
console.log("Delivery Month : " + oMonth);
console.log("Delivery Date : " + oDate);
console.log("Delivery Day : " + oDay);
console.log("Delivery Hours : " + oHours);
console.log("Delivery Minutes : " + oMinutes);
console.log("Delivery Seconds : " + oSeconds);
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 6 - Dental Appointment System
// ---------------------------------------------------------

let patient = "saikiran";
let dentist = "Dr.Kavya";
let fee = 700;

let visitDate = new Date();

visitDate.setFullYear(2026);
visitDate.setMonth(8);       // September
visitDate.setDate(22);
visitDate.setHours(15);
visitDate.setMinutes(0);
visitDate.setSeconds(0);

let vYear = visitDate.getFullYear();
let vMonth = visitDate.getMonth() + 1;
let vDate = visitDate.getDate();
let vDay = visitDate.getDay();
let vHours = visitDate.getHours();
let vMinutes = visitDate.getMinutes();
let vSeconds = visitDate.getSeconds();

console.log("Patient Name : " + patient);
console.log("Dentist Name : " + dentist);
console.log("Consultation Fee : " + fee);
console.log("Appointment Year : " + vYear);
console.log("Appointment Month : " + vMonth);
console.log("Appointment Date : " + vDate);
console.log("Appointment Day : " + vDay);
console.log("Appointment Hours : " + vHours);
console.log("Appointment Minutes : " + vMinutes);
console.log("Appointment Seconds : " + vSeconds);
console.log("Appointment Confirmed");
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 7 - Cab Ride Booking System
// ---------------------------------------------------------

let riderName = "Meena";
let cabType = "Sedan";
let baseFare = 220;
let km = 12;

let rideDate = new Date();

rideDate.setFullYear(2026);
rideDate.setMonth(7);        // August
rideDate.setDate(30);
rideDate.setHours(8);
rideDate.setMinutes(10);
rideDate.setSeconds(0);

let riYear = rideDate.getFullYear();
let riMonth = rideDate.getMonth() + 1;
let riDate = rideDate.getDate();
let riDay = rideDate.getDay();
let riHours = rideDate.getHours();
let riMinutes = rideDate.getMinutes();
let riSeconds = rideDate.getSeconds();

let rideFare = baseFare + km * 15;

console.log("Rider Name : " + riderName);
console.log("Cab Type : " + cabType);
console.log("Distance (km) : " + km);
console.log("Total Fare : " + rideFare);
console.log("Ride Year : " + riYear);
console.log("Ride Month : " + riMonth);
console.log("Ride Date : " + riDate);
console.log("Ride Day : " + riDay);
console.log("Ride Hours : " + riHours);
console.log("Ride Minutes : " + riMinutes);
console.log("Ride Seconds : " + riSeconds);
console.log("Cab Booked Successfully");
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 8 - Certification Exam Hall Ticket System
// ---------------------------------------------------------

let candidateName = "rahul";
let hallTicketNo = 2045;
let examSubject = "Web Development";
let examFee = 650;

let certExamDate = new Date();

certExamDate.setFullYear(2026);
certExamDate.setMonth(11);     // December
certExamDate.setDate(5);
certExamDate.setHours(10);
certExamDate.setMinutes(30);
certExamDate.setSeconds(0);

let eYear = certExamDate.getFullYear();
let eMonth = certExamDate.getMonth() + 1;
let eDate = certExamDate.getDate();
let eDay = certExamDate.getDay();
let eHours = certExamDate.getHours();
let eMinutes = certExamDate.getMinutes();
let eSeconds = certExamDate.getSeconds();

console.log("Candidate Name : " + candidateName);
console.log("Hall Ticket No : " + hallTicketNo);
console.log("Subject : " + examSubject);
console.log("Exam Fee : " + examFee);
console.log("Exam Year : " + eYear);
console.log("Exam Month : " + eMonth);
console.log("Exam Date : " + eDate);
console.log("Exam Day : " + eDay);
console.log("Exam Hours : " + eHours);
console.log("Exam Minutes : " + eMinutes);
console.log("Exam Seconds : " + eSeconds);
console.log("Hall Ticket Generated");
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 9 - Workshop Registration System
// ---------------------------------------------------------

let attendeeName = "prasad";
let workshopName = "AI & ML Bootcamp";
let regFee = 450;

let workshopDate = new Date();

workshopDate.setFullYear(2026);
workshopDate.setMonth(9);      // October
workshopDate.setDate(18);
workshopDate.setHours(10);
workshopDate.setMinutes(0);
workshopDate.setSeconds(0);

let wYear = workshopDate.getFullYear();
let wMonth = workshopDate.getMonth() + 1;
let wDate = workshopDate.getDate();
let wDay = workshopDate.getDay();
let wHours = workshopDate.getHours();
let wMinutes = workshopDate.getMinutes();
let wSeconds = workshopDate.getSeconds();

console.log("Attendee Name : " + attendeeName);
console.log("Workshop Name : " + workshopName);
console.log("Registration Fee : " + regFee);
console.log("Workshop Year : " + wYear);
console.log("Workshop Month : " + wMonth);
console.log("Workshop Date : " + wDate);
console.log("Workshop Day : " + wDay);
console.log("Workshop Hours : " + wHours);
console.log("Workshop Minutes : " + wMinutes);
console.log("Workshop Seconds : " + wSeconds);
console.log("Registration Successful");
console.log("-----------------------------------");


// ---------------------------------------------------------
// Task 10 - Gym Membership Renewal System
// ---------------------------------------------------------

let memberName = "fuzlan";
let planName = "Gold Plan";
let planFee = 2500;

let renewalDate = new Date();

renewalDate.setFullYear(2026);
renewalDate.setMonth(6);      // July
renewalDate.setDate(1);
renewalDate.setHours(7);
renewalDate.setMinutes(0);
renewalDate.setSeconds(0);

let gYear = renewalDate.getFullYear();
let gMonth = renewalDate.getMonth() + 1;
let gDate = renewalDate.getDate();
let gDay = renewalDate.getDay();
let gHours = renewalDate.getHours();
let gMinutes = renewalDate.getMinutes();
let gSeconds = renewalDate.getSeconds();

console.log("Member Name : " + memberName);
console.log("Plan Name : " + planName);
console.log("Plan Fee : " + planFee);
console.log("Renewal Year : " + gYear);
console.log("Renewal Month : " + gMonth);
console.log("Renewal Date : " + gDate);
console.log("Renewal Day : " + gDay);
console.log("Renewal Hours : " + gHours);
console.log("Renewal Minutes : " + gMinutes);
console.log("Renewal Seconds : " + gSeconds);
console.log("Membership Renewed");