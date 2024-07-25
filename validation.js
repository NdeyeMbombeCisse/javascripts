

let formulaire = document.getElementById('mon_formulaire');
let myregex = /^[a-zA-Z]+$/;   
let myregexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
let minLength = 3;
let maxLength = 15;  
let minpassword = 8; 

formulaire.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher la soumission du formulaire initialement
    let valid = true;
    
    // Validation pour le champ nom
    let myinput = document.getElementById('mon_input');
    let myerror = document.getElementById('error');
    if (myinput.value.trim() === "") {
        myerror.innerHTML = "Le nom est requis";
        myerror.style.color = 'red';
        valid = false;
    } else if (!myregex.test(myinput.value)) {
        myerror.innerHTML = "Le nom ne doit comporter que des lettres";
        myerror.style.color = 'red';
        valid = false;
    } else if (myinput.value.length < minLength || myinput.value.length > maxLength) {
        myerror.innerHTML = `Le nom doit comporter entre ${minLength} et ${maxLength} lettres`;
        myerror.style.color = 'red';
        valid = false;
    } else {
        myerror.innerHTML = ""; // Effacer le message d'erreur si la validation passe
    }

    // Validation pour le mot de passe
    let passwordInput = document.getElementById('password_input');
    let passwordError = document.getElementById('error_password');
    if (passwordInput.value.trim() === "") {
        passwordError.innerHTML = "Le mot de passe est requis";
        passwordError.style.color = 'red';
        valid = false;
    } else if (passwordInput.value.length < minpassword) {
        passwordError.innerHTML = "Le mot de passe doit comporter au moins 8 caractères";
        passwordError.style.color = 'red';
        valid = false;
    } else {
        passwordError.innerHTML = ""; // Effacer le message d'erreur si la validation passe
    }

    // Validation pour l'email
    let emailInput = document.getElementById('email_input');
    let emailError = document.getElementById('error_email');
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "L'email est requis";
        emailError.style.color = 'red';
        valid = false;
    } else if (!myregexemail.test(emailInput.value)) {
        emailError.innerHTML = "Veuillez entrer une adresse email valide";
        emailError.style.color = 'red';
        valid = false;
    } else {
        emailError.innerHTML = ""; // Effacer le message d'erreur si la validation passe
    }

    if (valid) {
        // Masquer le formulaire
        formulaire.classList.add('hidden');
        
        // Créer et afficher le message de succès
        let successMessage = document.createElement('div');
        successMessage.id = 'success_message';
        successMessage.classList.add('hidden');
        successMessage.innerHTML = "Formulaire soumis avec succès!";
        document.body.appendChild(successMessage);
        successMessage.classList.remove('hidden');

        setTimeout(function() {
            // Réafficher le formulaire et cacher le message de succès
            formulaire.classList.remove('hidden'); 
            successMessage.classList.add('hidden');
            resetForm(); // Appeler la fonction pour réinitialiser le formulaire
        }, 1000);
    }
});

function resetForm() {
    formulaire.reset();
}

