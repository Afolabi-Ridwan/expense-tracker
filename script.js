const form = document.querySelector("form");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const product = document.querySelector("#name");
const price = document.querySelector("#price");
const list = document.querySelector("#list");
const expense = document.getElementById("expenseTotal");
const income = document.querySelector("#incomeTotal");
const balanceTotal = document.querySelector("#balanceTotal");
const deleteBtn = document.getElementById("delete-btn");

// const localStorageTransactions = JSON.parse(
//   localStorage.getItem("transactions1")
// );

// let transactions =
//   localStorage.getItem("transactions1") !== null
//     ? localStorageTransactions
//     : [];

// function updateLocalStorage() {
//   localStorage.setItem("transactions1", JSON.stringify("transactions1"));
// }

function generateId() {
  return Math.floor(Math.random() * 200);
}

let transactions = [];

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "negative" : "positive");

  item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}  </span> <button id="delete-btn" onclick="removeTransaction(${
    transaction.id
  })" >x</button>
  `;

  list.appendChild(item);
}

function addtoList() {
  const textValue = text.value;
  const amountValue = amount.value;

  if (textValue === "" || amountValue === "") {
    alert("please add a text and amount");
  } else {
    const transaction = {
      id: generateId(),
      text: textValue,
      amount: amountValue,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    // updateLocalStorage();

    text.value = "";
    amount.value = "";
    console.log(transaction);
  }
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  init();
  if (amount.value < 0) {
    expense.textContent =
      Number(expense.textContent) - Math.abs(Number(amount.value));
  } else {
    income.textContent = Number(income.textContent) - Number(amount.value);
  }
}

function addAmount() {
  if (amount.value < 0) {
    expense.textContent =
      Number(expense.textContent) + Math.abs(Number(amount.value));
  } else {
    income.textContent = Number(income.textContent) + Number(amount.value);
  }
}

// function updateValues() {
//   const amounts = transactions.map((transaction) => transaction.amount);

//   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//   const income = amounts
//     .filter((item) => item > 0)
//     .reduce((acc, item) => (acc += item), 0)
//     .toFixed(2);

//   const expense = (
//     amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
//     -1
//   ).toFixed(2);

//   balanceTotal.innerText = `${total}`;
//   income.innerText = `${income}`;
//   expense.innerText = `${income}`;
// }

function balanceUp() {
  balanceTotal.textContent = income.textContent - expense.textContent;
  if (balanceTotal.textContent < 0) {
    balance.style.color = "red";
  } else {
    balance.style.color = "green";
  }
}

function zeros() {
  let x = Number(0);
  expense.textContent = x;

  let y = Number(0);
  income.textContent = y;

  let z = Number(0);
  balanceTotal.textContent = z;
}

function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);

  // updateValues();
}

zeros();
init();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addAmount();
  // updateValues();
  addtoList();
  balanceUp();
});

// function addInputToTotal() {
//   if (amount.value < 0) {
//     expense.textContent = expense + amount.value;
//   } else {
//     income.textContent = amount.value;
//     console.log(amount.value);
//   }
// }
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   addToHistory();
//   addMoreLists();
// });

// function addToHistory() {
//   const textValue = text.value;
//   const amountNum = amount.value;
//   return textValue, amountNum;
// console.log(textValue, amountNum);
//   product.textContent = textValue;
//   price.textContent = amountNum;
// }

// function addMoreLists() {
//   list = [];
//   for (const i = 0; i < 250; i++) {
//     if (i < list.length) {
//       list.push(addToHistory());
//     }
//   }

//   const textValue = text.value;
//   const amountNum = amount.value;

//   const a = [];
//   if (a.length < 30) {
//     for (let i = 0; i < 1; i++) {
//       if (i <= a.length) {
//         let m = a.push(textValue, amountNum);
//         console.log(m);
//       }
//     }
//     console.log(a);
//   }
// }

// let i = [];
// i.push("afolabi");
// console.log(i);

// i.push("ridwan");
// console.log(i);
