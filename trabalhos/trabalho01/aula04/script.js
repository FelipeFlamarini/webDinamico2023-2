function start() {
    let bd_contacts = []
    try {
        getLocalStorage()
        updateTable()
    } catch {
        setLocalStorage(bd_contacts)
}}

function inserirContato() {
    const contact = {
        name: document.getElementById("nome").value,
        phone: document.getElementById("telefone").value
    }

    bd_contacts = getLocalStorage();
    bd_contacts.push(contact);
    setLocalStorage(bd_contacts);
    updateTable();
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("bd_contacts"));
}

function setLocalStorage(bd_contacts) {
    localStorage.setItem("bd_contacts", JSON.stringify(bd_contacts));
}

function updateTable() {
    const bd_contacts = getLocalStorage();
    cleanTable()
    bd_contacts.forEach(newRow);
}

function newRow(contact, index) {
    const line = document.createElement("tr");
    line.innerHTML = `
    <td colspan="1">${index+1}</td>
    <td colspan="3">${contact.name}</td>
    <td colspan="3">${contact.phone}</td>
    <td colspan="1"><button class="delete" onclick="deleteEntry(${index})"">Delete</button></td>
    `;

    document.querySelector("#contactsTable>tbody").appendChild(line);
}

function cleanTable() {
    document.querySelector("#contactsTable>tbody").innerHTML = ""
}

function deleteEntry(index) {
    bd_contacts = getLocalStorage();
    bd_contacts[index] = ""
    bd_contacts = bd_contacts.filter(function(entry) {
        return entry !== ""
    })
    setLocalStorage(bd_contacts)
    // alert(`Entrada deletada com sucesso`)
    updateTable()
}