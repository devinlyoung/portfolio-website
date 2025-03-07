// Chatbot interaction
const chatbox = document.getElementById("chatbox");

// Function to handle sending user input
async function sendMessage() {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") return;  // Don't send empty input

    // Display user input in the chatbox
    chatbox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
    
    // Send the user input to the backend and get the chatbot's response
    const response = await getBotResponse(userInput);
    
    // Display the chatbot's response
    chatbox.innerHTML += `<div><strong>Chatbot:</strong> ${response}</div>`;
    
    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
    
    // Clear input field
    document.getElementById("user-input").value = "";
}

// Function to send the user input to the Flask backend and receive a response
async function getBotResponse(input) {
    try {
        // Make a POST request to the Flask backend
        const response = await fetch('http://127.0.0.1:4000/ask', {  // Replace with your Flask server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: input }),
        });

        const data = await response.json();
        return data.response;  // Return the chatbot's response from Flask
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, I encountered an error. Please try again.";
    }
}
