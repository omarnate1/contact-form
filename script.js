document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    const fields = [
      { id: "first-name", errorId: "first-name-error" },
      { id: "last-name", errorId: "last-name-error" },
      { id: "email", errorId: "email-error" },
      { id: "message", errorId: "message-error" },
    ];

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      const errorMessage = document.getElementById(field.errorId);

      if (!input.value.trim()) {
        errorMessage.style.display = "block";
        valid = false;
      } else {
        errorMessage.style.display = "none";
      }
    });

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    const queryType = document.querySelector(
      'input[name="user-recommend"]:checked'
    );
    const queryTypeError = document.getElementById("query-type-error");

    if (!queryType) {
      queryTypeError.style.display = "block";
      valid = false;
    } else {
      queryTypeError.style.display = "none";
    }

    const checkbox = document.getElementById("checkbox");
    const checkboxError = document.getElementById("checkbox-error");

    if (!checkbox.checked) {
      checkboxError.style.display = "block";
      valid = false;
    } else {
      checkboxError.style.display = "none";
    }

    if (valid) {
      alert(
        "Message Sent! Thanks for completing the form. We'll be in touch soon!"
      );
      this.submit();
    }
  });
