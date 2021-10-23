window.onload = function() {
  // 1. Homepage - quotes
  $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      type: "GET",
      success: function(response) {
          $("#loader").remove();
          response.forEach(function(quote, index) {
                  let quoteHtml = `
                      <div class="carousel-item ${index === 0 ? "active" : ""} h-100">
                          <div class="carousel-card container text-white d-flex h-100 justify-content-center align-items-center d-flex flex-sm-row flex-column mt-5 mb-5">
                              <img class="rounded-circle" src="${quote.pic_url}"  alt="First slide" style="width: 160px; height: 160px;">
                              <div class="col-6" style="min-width: 200px;">
                                  <p>${quote.text}</p>
                                  <p class="font-weight-bold">${quote.name}</p>
                                  <p class="font-italic">${quote.title}</p>
                              </div>
                          </div>
                      </div>
                  `;
                  $("#quotes").append(quoteHtml)
          });
      }
  })
}