let submitButton = document.querySelector(".submit-button");
let permission = document.getElementById("checkbox-permission");

var phoneMask = IMask(document.getElementById("contact-phone"), {
  mask: "+{7}(000)000-00-00"
});

var emailMask = IMask(document.getElementById("contact-email"), {
  mask: "/^S*@?S*$/"
});

permission.addEventListener("click", e => {
  permission.checked ? (submitButton.disabled = "") : 0;
});

submitButton.addEventListener("click", e => {
  e.preventDefault();
  let requiredInputs = document.querySelectorAll(".form__input");
  requiredInputs.forEach(elem => {
    if (elem.value === "" && !elem.disabled) {
      elem.classList.add("invalid-input");
      // elem.insertAdjacentHTML(
      //   "beforebegin",
      //   `<div class="attention">обязательно к заполнению</div>`
      // );
    }
  });
  let name = document.getElementById("name-input").value;
  if (name.trim() === "") {
    let label = document.getElementById("name-label");
    let attention = document.createElement("div");
    attention.className = "attention";
    attention.innerHTML = "обязательно к заполнению";
    document.getElementById("name-input").classList.add("invalid-input");
    label.classList.add("pink");
    document.getElementsByClassName("attention").length < 1
      ? label.append(attention)
      : 0;
  }
});

document.querySelectorAll(".contact-selector").forEach(elem => {
  elem.addEventListener("click", () => {
    if (elem.id === "phone") {
      document.getElementById("contact-email").disabled = "disabled";
      document.getElementById("contact-phone").disabled = "";
    } else {
      document.getElementById("contact-phone").disabled = "disabled";
      document.getElementById("contact-email").disabled = "";
    }
  });
});
