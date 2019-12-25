const contacts = []
document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const contact = {
        name: name,
        email: email,
        mobile: mobile
    }
    contacts.push(contact)
    let displayText = "";
    contacts.forEach(currentObject => {
        displayText = displayText + `<div style= "border: 1px solid black; margin: 10px; padding:10px;">
                                        <h1>${currentObject.name}</h1>
                                        <h1>${currentObject.email}</h1>
                                        <h1>${currentObject.mobile}</h1>
                                    </div>`
        document.getElementById("displayContacts").innerHTML = displayText;    
    })
})