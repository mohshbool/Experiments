$(document).ready(() => {

  // An example of what you should be receiving
  const slides = {
    "firstSlide": {
      "src": "./static/users_media/2178306@someImage.jpg"
    }
  }

  
  $.getJSON("/<your pathway>", your GET request parameters, data => {

    // Variable to keep track of your data-id
    let index = 2;

    // Iterate over the object of objects your recieved form the request
    for (let [key, value] of Object.entries(data)) {

      // Manipulate the DOM to add your new slides
      $("#carousel-items").append(
        `<div class="carousel-item" data-id=${index}>
            <img class="d-block w-100" src="${value.src}" alt="First slide">
          </div>`
      )

      // Increment index
      index++
    }
  })
})