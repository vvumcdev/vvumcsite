const submitButton = document.getElementById("submitbut")
const input = document.getElementById("email")

input.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  if (value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
} )
