let submit = document.getElementById("submit");

let addClass = ['container', 'col-sm', 'text-light'];

submit.addEventListener("click", addToTable);

function addToTable() {
    let myTable = document.getElementById('myTable');
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    let row = document.createElement('tr');
    let dataName = document.createElement('td');
    let dataEmail = document.createElement('td');
    let dataNumber = document.createElement('td');

    console.log(fullName, email, phoneNumber);

    dataName.innerHTML = fullName;
    dataName.classList.add(...addClass);

    dataEmail.innerHTML = email;
    dataEmail.classList.add(...addClass);

    dataNumber.innerHTML = phoneNumber;
    dataNumber.classList.add(...addClass);

    row.classList.add(...['container', 'row']);

    row.append(dataName, dataEmail, dataNumber);
    myTable.append(row);

    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
}