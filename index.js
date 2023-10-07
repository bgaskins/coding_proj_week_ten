const form = document.querySelector('.input-form'); // Selects single input-form class
const nameInput = document.getElementById('name'); // Selects name by ID
const emailInput = document.getElementById('email'); // Selects email by ID
const tableBody = document.getElementById('table-body'); // Selects table body by ID

/* Start the first name and email submission at #1 */
let id = 1;

/* Access the bootstrap form by ID. Event listener listens for the button click */
document.querySelector('.input-form').addEventListener('click', (event) => {
    /* Prevent default behaviors since we're simply using JS and not sending to a 
    server or database */
    event.preventDefault();
    const name = nameInput.value; /* Name entered */
    const email = emailInput.value; /* Email entered */

    /* If a name and email are entered, a new row is created */
    if(name && email) {
    /* New row is created in the DOM */
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
      `;

    /* Add the new row with appendChild*/
    tableBody.appendChild(newRow);

    /* Increase the id# by 1 each time a row is added */
    id++;

    /* Reset the name and email inputs for new row entries */
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    }
});



