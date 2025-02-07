// Chatbot interaction
const chatbox = document.getElementById("chatbox");

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const response = generateResponse(userInput);

    // Display user input and chatbot response
    chatbox.innerHTML += `<div>User: ${userInput}</div>`;
    chatbox.innerHTML += `<div>Chatbot: ${response}</div>`;

    // Scroll to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

function generateResponse(input) {
    const responses = {
        "skills": "I am proficient in HTML, CSS, JavaScript, and React.",
        "projects": "You can find my projects on GitHub.",
        "experience": "I have 3 years of experience in web development.",
        "hello": "Hi there! How can I help you?",
    };

    return responses[input.toLowerCase()] || "I'm sorry, I don't understand that.";
}
