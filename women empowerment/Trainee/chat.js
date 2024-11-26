function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    if (messageInput.value.trim()) {
        const messageText = messageInput.value;
        const messageTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const traineeMessage = document.createElement("p");
        traineeMessage.className = "message trainee";
        traineeMessage.innerHTML = `<span class="message-time">${messageTime}</span> ${messageText}`;
        chatBox.appendChild(traineeMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

        
        messageInput.value = "";

        setTimeout(() => {
            const trainerMessage = document.createElement("p");
            trainerMessage.className = "message trainer";
            trainerMessage.innerHTML = `<span class="message-time">${messageTime}</span> Thank you for reaching out! How can I help?`;
            chatBox.appendChild(trainerMessage);

            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}
