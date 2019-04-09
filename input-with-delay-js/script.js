// Document on ready event
$(document).ready(() => {

  // Attach event hanlder to input event on element
  $('.search-input').on('input', function() {

    // Check whether a delay is already in progress, delete it
    if (this.delay) clearTimeout(this.delay);

    // Attach a delay property to the input element
    this.delay = setTimeout(() => {
      // Code logic goes here ...
    }, 1000);
  });
});