document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#input").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      console.log("Enter key pressed");
    }
  });
});
