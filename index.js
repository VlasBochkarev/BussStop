
let totalPeople = 0;
let passenger = 0;
let peopleIn = 0  ;
let peopleOut = 0  ;
let ticket = 20;


console.log("Прибываем на остановку Улица Программистов. В салоне "+passenger+" пасажиров")


peopleIn = prompt("Сколько пассажиров зашло на остановке? ") ;
passenger += Number(peopleIn);
totalPeople += Number(peopleIn);

peopleOut = prompt("Сколько пассажиров вышло на остановке? ");
passenger -= Number(peopleOut);

console.log("Отправляемся с остановки Улица Программистов. Прибываем на остановку Улица Айтишников.В салоне  " + passenger + " пасажиров");



peopleIn = prompt("Сколько пассажиров зашло на остановке? ");
passenger += Number(peopleIn);
totalPeople += Number(peopleIn);


peopleOut = prompt("Сколько пассажиров вышло на остановке? ");
passenger -= Number(peopleOut);

console.log("Отправляемся с остановки Улица Айтишников. Прибываем на остановку Улица Кодеров.В салоне  "+passenger+" пасажиров ") ;


peopleIn = prompt("Сколько пассажиров зашло на остановке? ");
passenger += Number(peopleIn);
totalPeople += Number(peopleIn);


peopleOut = prompt("Сколько пассажиров вышло на остановке? ");
passenger -= Number(peopleOut);


console.log("Отправляемся с остановки Улица Кодеров. Прибываем на остановку Силиконовая Долина.В салоне "+passenger+" пасажиров") ;


peopleIn = prompt("Сколько пассажиров зашло на остановке? ");
passenger += Number(peopleIn);
totalPeople += Number(peopleIn);


peopleOut = prompt("Сколько пассажиров вышло на остановке? ");
passenger -= Number(peopleOut);

console.log("Автобус прибыл на конечную останвку. В салоне "+passenger+" пасажиров");

let dollar = totalPeople*ticket;
let gas = dollar/5;
let driver = dollar/4 ;
let repair = dollar/5;
let tax = dollar/5;
 

console.log("Всего заработали: $"+ totalPeople*ticket) ;
console.log("Зарплата водителя: $"+driver) ;
console.log("Расходы на топливо: $"+gas) ;
console.log("Налоги: $"+tax) ;
console.log("Расходы на ремонт машины: $"+repair) ;
console.log("Итого доход : $" + (dollar-gas-driver-
repair-tax)) ;

