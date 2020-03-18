let submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  if (name.trim() === "") {
    let label = document.getElementById("name-label");
    let attention = document.createElement("div");
    attention.className = "attention";
    attention.innerHTML = "обязательно к заполнению";
    document.getElementById("name").classList.add("invalid-input");
    label.classList.add("pink");
    label.append(attention);
  }
});

document.querySelectorAll(".contact-selector").forEach(elem => {
  elem.addEventListener("click", () => {
    console.log(elem.id);
    if (elem.id === "phone") {
      document.getElementById("contact-email").disabled = "disabled";
      document.getElementById("email").disabled = "disabled";
      document.getElementById("email-label").classList.add("disabled");
      document.getElementById("phone-label").classList.add("pink");
    } else {
      document.getElementById("contact-phone").disabled = "disabled";
      document.getElementById("phone").disabled = "disabled";
      document.getElementById("phone-label").classList.add("disabled");
      document.getElementById("email-label").classList.add("pink");
    }
  });
});
