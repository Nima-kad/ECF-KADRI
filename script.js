document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs ❗❗");
        return;
    }

    // Vérification email avec regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Adresse email invalide ⚠️❗");
        return;
    }

    console.log("Votre nom:", name);
    console.log("Votre email:", email);
    console.log("Votre message:", message);
    alert("Votre message envoyé avec succées 🤩💯"+name);
});
