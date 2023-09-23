function initialize() {
  let form = document.getElementById("newsletter-form");
  let txtEmail = document.getElementById("txtEmail");
  let spErrorMessage = document.getElementById("spEmailErrorMessage");
  let btnDismiss = document.getElementById("btnDismiss");

  btnDismiss.addEventListener("click", function () {
    window.location.href = window.location.href;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate email required
    if (txtEmail.value === "") {
      if (!txtEmail.classList.contains("has-error")) {
        txtEmail.classList.add("has-error");
      }
      spErrorMessage.innerText = "Email is required";
      spErrorMessage.style.display = "block";
      return;
    }

    // Validate email syntax
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(txtEmail.value) === false) {
      if (!txtEmail.classList.contains("has-error")) {
        txtEmail.classList.add("has-error");
      }
      spErrorMessage.innerText = "Valid email required";
      spErrorMessage.style.display = "block";
      return;
    }

    // If success then show popup success
    // Delete this and replace with new function
    showPopup();
  });

  txtEmail.addEventListener("input", function (e) {
    // Remove error after user type
    if (
      e.currentTarget.value !== "" &&
      txtEmail.classList.contains("has-error")
    ) {
      txtEmail.classList.remove("has-error");
      spErrorMessage.style.display = "none";
    }
  });
}

function showPopup() {
  let dialog = document.querySelector(".news-dialog");
  let page = document.querySelector(".newsletter");

  page.classList.add("fade-out-bck", "hide");
  dialog.classList.add("fade-in", "show");
}

initialize();
