
export function showPrompt2(message) {
    debugger;
    str = prompt(message, 'Type your name here');
    return str;
}

export function alertUser() {
    alert('The button was selected!');
}

export function addHandlers() {
    const btn = document.getElementById("btnId");
    btn.addEventListener("click", alertUser);
}

window.interopFunctions = {
    
    setImageSource: function (element, imageData, imgType) {
        debugger;
        element.typ
    }
}
