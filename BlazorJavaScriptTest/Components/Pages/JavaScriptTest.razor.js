export function showPrompt2(message) {
    return prompt(message, 'Type your name here');
}

export function alertUser() {
    alert('The button was selected!');
}

export function addHandlers() {
    const btn = document.getElementById("btnId");
    btn.addEventListener("click", alertUser);
}