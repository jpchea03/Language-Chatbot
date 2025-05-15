/*script.js*/
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
    fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: input },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const reply =
          data.choices?.[0]?.message?.content || "No response from OpenAI.";
        displayMessage("bot", reply);
      })
      .catch((error) => {
        console.error("Error:", error);
        displayMessage("bot", "Sorry, something went wrong.");
      });
  }
});
