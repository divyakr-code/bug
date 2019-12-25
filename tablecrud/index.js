// alert("Hello World")
const contacts = []
let displayText = "";
document.getElementById("form1").addEventListener("submit", (e) => {
    console.log(e)
    e.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value
    const contact = {
        name: name,
        email: email,
        mobile: mobile
    }
    contacts.push(contact)
    console.log("prevValue : " + displayText)
    contacts.forEach((contact, index) => {
        displayText = displayText + `<tr>
                                        <td>${contact.name}</td>
                                        <td>${contact.email}</td>
                                        <td>${contact.mobile}</td>
                                        <td><button onclick="edit(${index})">Update</button></td>
                                        <td><button onclick="deleteContact(${index})">Update</button></td>
                                    </tr>`
    })
    //clear input fields
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mobile").value = ""
    document.getElementById("displayContacts").innerHTML = displayText
})
//find the user and disply his details in inputs (update form)
const edit = (index) => {
    let currentValue = contacts[index]
    const updateDiv = document.getElementById("updateDiv");
    console.log(currentValue)
    updateDiv.innerHTML = `<div>
                                <h1>Edit ${currentValue.name}</h1>
                                <input id="updateName" type="text" required placeholder="Name" value="${currentValue.name}" name="name">
                                <input id="updateEmail" type="email" required placeholder="Email" value="${currentValue.email}" name="email">
                                <input id="updateMobile" type="tel" required placeholder="Mobile" value="${currentValue.mobile}" name="mobile">
                                <button onClick="update('${index}')">Save Changes</button>
                            </div>`
}
​
// actual update
​
const update = (index) => {
    const newName = document.getElementById("updateName").value
    const newEmail = document.getElementById("updateEmail").value
    const newMobile = document.getElementById("updateMobile").value
    const newContact = {
        name: newName, email: newEmail, mobile: newMobile
    }
    contacts[index] = newContact;
    displayText = ""
    contacts.forEach((contact, index) => {
        displayText = displayText + `<tr>
                                        <td>${contact.name}</td>
                                        <td>${contact.email}</td>
                                        <td>${contact.mobile}</td>
                                        <td><button onclick="edit('${index}')">Update</button></td>
                                    </tr>`
    })
    document.getElementById("displayContacts").innerHTML = displayText
    document.getElementById("updateDiv").innerHTML = ""

}

const deleteContact = (index) => {
    contacts.splice(index,1);
    let displayText = ""
    contacts.forEach((contact, index) => {
        displayText = displayText + `<tr>
                                        <td>${contact.name}</td>
                                        <td>${contact.email}</td>
                                        <td>${contact.mobile}</td>
                                        <td><button onclick="edit('${index}')">Update</button></td>
                                        <td><button onclick="deleteContact('${index}')">Delete</button></td>
                                    </tr>`
    })
    document.getElementById("displayContacts").innerHTML = displayText

}