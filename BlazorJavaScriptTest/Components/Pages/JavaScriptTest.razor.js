
export function showPromptEx1(message) {
    return prompt(message, 'Type something here');
}

export function showPromptEx2(message) {
    debugger;
    let str = prompt(message, 'Type your name here');
    return str;
}

export function alertUser() {
    debugger;
    alert('The button was selected!');
    const dbg = "dbgg";
}

export function addHandlers() {
    const btn = document.getElementById("btnId");
    btn.addEventListener("click", alertUser);
}

export function setImageSource(elementId, byteArray, contentType){
    debugger;
    const arrayBuffer = byteArray;
    let blobOptions = {};
    if (contentType) {
        blobOptions['type'] = contentType;
    }
    const blob = new Blob([arrayBuffer], blobOptions);
    const url = URL.createObjectURL(blob);
    const element = document.getElementById(elementId);

    element.onload = () => {
        URL.revokeObjectURL(url);
    }
    element.src = url;
}
