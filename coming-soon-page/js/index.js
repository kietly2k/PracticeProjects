function initialize() {
  let form = document.getElementById("form-email");
  let txtEmail = document.getElementById("email");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate email empty
    if (txtEmail.value === "") {
      toggleErrorClass(true, "Email is required");
      return;
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(txtEmail.value) === false) {
      toggleErrorClass(true, "Please provide a valid email");
      return;
    }
  });
}

function toggleErrorClass(isError, errorMessage) {
  let email = document.getElementById("email");
  let btnSend = document.getElementById("btnSend");
  let spErrorMessage = document.getElementById("error-message");

  if (isError) {
    if (email.classList.contains("error-input"))
      email.classList.add("error-input");

    // if (email.classList.contains("error-message"))
    // spErrorMessage.classList.add("error-message");

    if (btnSend.classList.contains("error-icon"))
      btnSend.classList.add("error-icon");

    spErrorMessage.innerText = errorMessage;
  } else {
    if (email.classList.contains("error-input"))
      email.classList.remove("error-input");

    if (btnSend.classList.contains("error-icon"))
      btnSend.classList.remove("error-icon");

    spErrorMessage.innerText = "";
  }
}

initialize();
