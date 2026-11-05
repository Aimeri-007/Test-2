// Результаты заданий 1, 2, 3 и 7 в консоли браузера (F12)

// ---------- Задание 1 ----------
const extractNumbers = function (str) {
    let result = [];
    let current = "";

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] >= "0" && str[i] <= "9") {
            current = current + str[i];
        } else {
            
            if (current !== "") {
                result.push(Number(current));
                current = "";
            }
        }
    }

  
    if (current !== "") {
        result.push(Number(current));
    }

    return result;
};

console.log("Задание 1:", extractNumbers("a1fg5hj6")); // [1, 5, 6]


// ---------- Задание 2 ----------
function fibonacci(a, b) {

    if (a > 144) {
        return;
    }

    console.log("Фибоначчи:", a);

    setTimeout(function () {
        fibonacci(b, a + b);
    }, 1000);
}

fibonacci(1, 1);


// ---------- Задание 3 ----------
async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }
    } catch (error) {
        console.log("Ошибка:", error);
    }
}

getProducts();


// ---------- Задание 4 (делегирование событий) ----------
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", function (event) {
   
    if (event.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = event.target.textContent;
    }
});


// ---------- Задание 5 ----------
const box = document.getElementById("box");
const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function () {
    if (box.style.display === "none") {
        box.style.display = "inline-block";
    } else {
        box.style.display = "none";
    }
});


// ---------- Задание 6 ----------
const counter = document.getElementById("counter");
let number = 0;

const timer = setInterval(function () {
    number = number + 1;
    counter.textContent = number;

    if (number === 100) {
        clearInterval(timer);
    }
}, 1);


// ---------- Задание 7 ----------
const btn7 = document.getElementById("btn7");

async function getData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        console.log("Задание 7:", data);
    } catch (error) {
        console.log("Ошибка:", error);
    }
}

btn7.addEventListener("click", getData);