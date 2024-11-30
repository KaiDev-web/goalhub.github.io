function login(event) {  
    event.preventDefault();  
    // Logica di accesso (esempio semplificato)  
    const username = document.getElementById("username").value;  
    const password = document.getElementById("password").value;  
    // Simulazione accesso riuscito; in una app reale, dovresti controllare con un server  
    if (username && password) {  
        window.location.href = "dashboard.html"; // Reindirizza alla dashboard  
    }  
}  

document.getElementById("addGoalButton").addEventListener("click", function() {  
    const input = document.getElementById("goalInput");  
    input.style.display = input.style.display === "none" ? "block" : "none";  
});  

function addGoal() {  
    const goal = document.getElementById("goal").value;  
    alert("Obiettivo aggiunto: " + goal);  
    // Qui puoi aggiungere logica per salvare l'obiettivo  
}  

function settings() {  
    alert("Impostazioni cliccate");  
}  

function logout() {  
    alert("Sei stato disconnesso");  
    window.location.href = "login.html"; // Torna alla pagina di accesso  
}  

function account() {  
    alert("Visualizza dettagli account");  
}  

function openChat() {  
    alert("Entrare nelle chat vocali");  
}  

function openBank() {  
    window.location.href = "banca.html"; // URL per la pagina bancaria  
}
function sendMoney() {  
    const contactList = document.getElementById("contactList");  
    contactList.style.display = contactList.style.display === "none" ? "block" : "none";  
}  

function confirmSend() {  
    const contact = document.getElementById("contacts").value;  
    alert("Denaro inviato a " + contact);  
    // Qui puoi aggiungere logica per inviare denaro realmente, se implementato  
}
