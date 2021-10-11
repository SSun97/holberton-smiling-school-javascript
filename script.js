$(document).ready(function () {
    //   Quotes ===============================================================
  
    /**
     * Creates a carousel item and appends it to the DOM
     * @data  {Array} List of data to be displayed as Quotes
     * @return {undefined}  No return
     */
    function displayQuotes(data) {
      let classItem = "";
      for (let i in data) {
        classItem = i == 0 ? "carousel-item active" : "carousel-item";
        let $carouselItem = $(`
          <blockquote class="${classItem}">
          <div class="row mx-auto align-items-center">
              <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img
                  src="${data[i].pic_url}"
                  class="d-block align-self-center"
                  alt="Carousel Pic ${i}"
              />
              </div>
              <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                  <p class="text-white pr-md-4 pr-lg-5">
                  ${data[i].text}
                  </p>
                  <h4 class="text-white font-weight-bold">${data[i].name}</h4>
                  <span class="text-white">${data[i].title}</span>
              </div>
              </div>
          </div>
          </blockquote>;
      `);
  
        $("#carousel-items").append($carouselItem);
      }
  
      // END OF displayQuotes
    }
})