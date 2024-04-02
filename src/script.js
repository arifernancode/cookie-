function processDecision(decision) {
    const REPLY_LABEL = document.getElementById("replyLabel");
    if(decision === 'Yes') {
        REPLY_LABEL.textContent = "😁 👉 🍪";
    }
    else if(decision === 'No') {
        REPLY_LABEL.textContent = "😭😭";
    }
}