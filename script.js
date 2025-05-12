document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  const mainDiv = document.getElementById("main");

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
    msgDiv.className = sender;
    msgDiv.textContent = (sender === "user" ? "You: " : "Bot: ") + message;
    document.getElementById("messages").appendChild(msgDiv);
  }

  function output(input) {
    // Placeholder response
    displayMessage("bot", "Hello, world!");
  }
});
