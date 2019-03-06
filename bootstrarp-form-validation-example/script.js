$(document).ready(() => {
  // Assets
  const email = document.getElementById('email')
  const $email = $('#email')
  const password = document.getElementById('password')
  const $password = $("#password")

  // Input event listeners for validation
  $email.on('input', () => {
    // User isn't responding, show error
    if (email.validity.patternMismatch) {
      // Ensure not to duplicate by checking if the error is showing
      if (!$email.parent().has("div").length) {
        // Add invalid class to elements
        email.classList.add('is-invalid')

        // Append necessary html for error reporting
        $email.parent().append(
          "<div class=\"invalid-feedback\">" 
          + "E-mails must be in the following order: characters@characters.domain"
          + "</div>"
        )
      }
    } 
    // Remove error if user responds
    else if ($email.parent().has("div").length) {
      // Add invalid class to elements
      email.classList.remove('is-invalid')

      // Remove html added earlier
      $email.parent().children("div.invalid-feedback").remove()
    }
  })

  $password.on('input', () => {
    // User isn't responding, show error
    if (password.validity.patternMismatch) {
      // Ensure not to duplicate by checking if the error is showing
      if (!$password.parent().has("div").length) {
        // Add invalid class to elements
        password.classList.add('is-invalid')

        // Append necessary html for error reporting
        $password.parent().append(
          "<div class=\"invalid-feedback\">" 
          + "Passwords must contain 8 or more characters that are of at least one number,"
          + "and one uppercase and lowercase letter" 
          + "</div>"
        )
      }
    } 
    // Remove error if user responds
    else if ($password.parent().has("div").length) {
      // Add invalid class to elements
      password.classList.remove('is-invalid')

      // Remove html added earlier
      $password.parent().children("div.invalid-feedback").remove()
    }
  })
})