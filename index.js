console.log("JS works");
let people = [
  {
    id: 1,
    firstName: "Ezra",
    lastName: "Aiden",
    email: "e.aiden@basshall.com",
    ipAddress: "18.6.24.104",
  },
  {
    id: 2,
    firstName: "Ian",
    lastName: "Auston",
    email: "ian.auston@goldmansachs.com",
    ipAddress: "17.16.4.105",
  },
];
const tableBodyEl = document.getElementById("peopleTBodyEl");

people.forEach((personObject) => CreateTableRow(tableBodyEl, personObject));

function CreateTableRow(myTable, object) {
  const row = myTable.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.textContent = object.id;
  cell2.textContent = object.firstName;
  cell3.innerHTML = object.lastName;
  cell4.innerHTML = object.email;
  cell5.textContent = object.ipAddress;
}
