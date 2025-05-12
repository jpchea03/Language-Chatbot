/*File: script.js*/
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");

  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      handleUserInput();
    }
  });

  document
    .getElementById("sendButton")
    .addEventListener("click", handleUserInput);

  function handleUserInput() {
    const input = inputField.value.trim();
    if (input === "") return;
    displayMessage("user", input);
    inputField.value = "";
    output(input);
  }

  function displayMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `${sender} message`;
    msgDiv.textContent = (sender === "user" ? "You: " : "Bot: ") + message;
    document.getElementById("messages").appendChild(msgDiv);
    scrollToBottom();
  }

  function scrollToBottom() {
    const messages = document.getElementById("messages");
    messages.scrollTop = messages.scrollHeight;
  }

  function output(input) {
    // Placeholder response
    displayMessage("bot", "Hello, world!");
  }
});
