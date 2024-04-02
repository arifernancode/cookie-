function setVisible() {
    let startButton = document.getElementById("startButton");
    let everythingElse = document.querySelector("div");

    startButton.style.display = 'none';
    everythingElse.style.display = 'block';

}
function processDecision(decision) {
    const REPLY_LABEL = document.getElementById("replyLabel");
    if(decision === 'Yes') {
        REPLY_LABEL.textContent = "😁 👉 🍪";
    }
    else if(decision === 'No') {
        REPLY_LABEL.textContent = "😭😭";
    }
}