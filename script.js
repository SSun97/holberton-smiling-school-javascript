window.onload = function() {
  // 1. Homepage - quotes
  $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      type: "GET",
      success: function(response) {
          response.forEach(function(quote, index) {
              setTimeout(function() {
                  $("#loader").remove();
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
              }, 1000);
          });
      }
  });
  // 2. Homepage - popular tutorials
  function videos(url, id) {
      $.ajax({
      url: url,
      type: "GET",
      success: function(response) {
          $("#loader").remove();
          response.forEach(function(quote, index) {
                  let quoteHtml = `
                      <div class="card m-5" style="width: 16rem;">
                          <div class=" d-flex align-items-center justify-content-center">
                          <img src="${quote.thumb_url}" alt="" class="card-img-top">
                          <img src="./images/play.png" alt="" class="position-absolute" style="width: 50px; height: 50px;">
                          </div>
                          <div class="card-body">
                          <h5 class="card-title font-weight-bold text-left">${quote.title}</h5>
                          <p class="card-text text-muted text-left">${quote['sub-title']}</p>
                          <div class="d-flex align-items-center">
                              <div class="mr-3">
                              <img src="${quote.author_pic_url}" alt="" class="rounded-circle" style="width: 30px; height: 30px;">
                              </div>
                              <div class="carousel__user color-pink">
                              ${quote.author}
                              </div>
                          </div>
                          <div class="d-flex justify-content-between mt-3 align-items-center">
                              <img src="./images/star_on.png" alt="" class="star" style="height: 20px; width: 20px;">
                              <img src="./images/star_on.png" alt="" class="star" style="height: 20px; width: 20px;">
                              <img src="./images/star_on.png" alt="" class="star" style="height: 20px; width: 20px;">
                              <img src="./images/star_on.png" alt="" class="star" style="height: 20px; width: 20px;">
                              <img src="./images/star_off.png" alt="" class="star" style="height: 20px; width: 20px;">
                              <div class="color-pink carousel-time">${quote.duration}</div>
                          </div>
                          </div>
                      </div>
                  `;
                  $(`#${id}`).append(quoteHtml)
          });
      }
  });
  }
  videos("https://smileschool-api.hbtn.info/popular-tutorials", "pop-videos");
  videos("https://smileschool-api.hbtn.info/latest-videos", "latest-videos");
}