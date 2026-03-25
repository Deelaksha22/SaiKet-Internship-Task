function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }

    if (email === "") {
        alert("Email is required");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}