const txtEmail = document.getElementById("email");
const btnSend = document.getElementById("btnSend");
const spErrorMessage = document.getElementById("error-message");

function initialize() {
  btnSend.addEventListener("click", function (e) {
    // Validate email empty
    if (txtEmail.value === "") {
      addErrorClass("Email is required");
      return;
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(txtEmail.value) === false) {
      addErrorClass("Please provide a valid email");
      return;
    }
  });

  txtEmail.addEventListener("input", function (e) {
    // Remove error after user type
    if (e.currentTarget.value !== "") {
      txtEmail.classList.remove("error-input");
      btnSend.classList.remove("error-icon");
      spErrorMessage.innerText = "";
    }
  });
}

function addErrorClass(errorMessage) {
  if (txtEmail.classList.contains("error-input") == false)
    txtEmail.classList.add("error-input");

  if (btnSend.classList.contains("error-icon") == false)
    btnSend.classList.add("error-icon");

  spErrorMessage.innerText = errorMessage;
}

initialize();