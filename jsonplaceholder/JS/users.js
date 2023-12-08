"use strict";
//get html element
const usersPageTableBody = document.getElementById("usersPageTableBody");

//write function
function loadUsersPageTable(users) {
  console.log(users);
  for (const user of users) {
    let row = usersPageTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = user.id;

    let cell2 = row.insertCell();
    cell2.innerText = user.name;

    let cell3 = row.insertCell();
    cell3.innerText = user.username;
  }
}

//This is the part were we display
window.onload = function () {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      loadUsersPageTable(users);
    });
};

