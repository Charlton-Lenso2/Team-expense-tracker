let expenses = [];

const form = document.getElementById('expenseform');
const total = document.getElementById('total');
const list = document.getElementById('expenselist');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const payerInput = document.getElementById('payer');
const categoryInput = document.getElementById('category');

function renderExpenses() {
        list.innerHTML = "";

        expenses.forEach(function(expense, index) {

            const li = document.createElement('li');
            li.textContent = `${expense.description} - $${expense.amount}, ${expense.category}, paid by: ${expense.payer}`;
            list.appendChild(li)

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("data-index", index);
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete";
            li.appendChild(deleteButton);
        });
    }  

list.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const index = Number(event.target.getAttribute("data-index"));
    expenses.splice(index, 1);
    renderExpenses();
    addItems();
  }
});

function addItems(){
    const totalCost = expenses.reduce(function(acc, expense2){
        return acc + expense2.amount
    }, 0);

    total.textContent = `Total Amount: $${totalCost}`;
}


form.addEventListener('submit', function(event){
    event.preventDefault();

    
    const amount = Number(amountInput.value);

    if (amount <= 0 || isNaN(amount) || descriptionInput.value.trim() === "" ){
        alert("Please enter a valid description and amount.");
           return;
    } 

    const newExpenses = {
        description: descriptionInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value,
        payer: payerInput.value
    };

    expenses.push(newExpenses);
    renderExpenses();
    addItems();
    form.reset();
})





// let expenses = [];

// const form = document.getElementById('expenseform');
// const list = document.getElementById('expenselist');
// const total = document.getElementById('total');
// const descriptionInput = document.getElementById('description');
// const amountInput = document.getElementById('amount');
// const categoryInput = document.getElementById('category');
// const payerInput = document.getElementById('payer');

// function renderexpenses() {
//         list.innerHTML = "";

//         expenses.forEach(function(expense) {

//             const li = document.createElement('li');
//             li.textContent = `${expense.description} - $${expense.amount}, ${expense.category}, paid by ${expense.payer}`;
//             list.appendChild(li);
//         });
//     }

// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     const newExpenses = {
//         description: descriptionInput.value,
//         amount: Number(amountInput.value),
//         category: categoryInput.value,
//         payer: payerInput.value
//     };

//     expenses.push(newExpenses);
//     renderexpenses();
// });

