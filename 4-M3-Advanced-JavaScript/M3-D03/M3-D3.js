const loadImagesBtn = () => {
  document.querySelector("main div.album div.container div.row").innerHTML = ""
  const cardDiv = document.querySelector("main div.album div.container div.row")
  loadImagesQueryInput = document.getElementById("loadImagesQueryInput").value
  fetch(`http://www.splashbase.co/api/v1/images/search?query=${loadImagesQueryInput}`)
    .then(resp => resp.json())
    .then(result => {
      const alert = document.getElementById("alert")
      alert.classList.remove("d-none")
      alert.innerText = `${result.images.length} images loaded`
      setTimeout(() => {
        const alert = document.getElementById("alert")
        alert.classList.add("d-none")
      }, 5000);
      cardDiv.innerHTML += result.images.map(Data =>

        `<div class="col-md-4" id="cardId${Data.id}">
                <div class="card mb-4 shadow-sm">
                <div class="card-image">
                  <img src="${Data.url}" alt="ImageId:${Data.id}" class="card-img-top"/>
                  </div>
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                      <!-- Button trigger modal -->
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#Modal${Data.id}">
                        View
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="Modal${Data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            
                            <div class="modal-body">
                            <img src="${Data.url}" alt="ImageId:${Data.id}" class="img-fluid"/>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onclick="
                          document.getElementById('cardId${Data.id}').addEventListener('click', () => {
                            document.getElementById('cardId${Data.id}').classList.add('d-none');
                          });"
                        >
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">ID: ${Data.id}</small>
                    </div>
                  </div>
                </div>
              </div>
              `
      ).join("")
    }).catch(error => {
      window.alert(`API Error: ${error}`)
    })
}
window.onload = (event) => {
  fetch(`http://www.splashbase.co/api/v1/images/search?query=forest`)
    .then(resp => resp.json())
    .then(result => {
      const createCarousel = document.getElementById("carouselExampleSlidesOnly")


      for (let i = 0; i < result.images.length; i++) {
        // console.log(result.images[i].url);
        createCarousel.innerHTML =
          `<div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${result.images[0].url}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${result.images[1].url}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${result.images[2].url}" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
          `
      }

      const filteredResultImages = result.images.filter((value, index, array) => {
        return index < 3;
      });
      for (let i = 0; i < filteredResultImages.length; i++) {
        console.log(filteredResultImages[i].url)
      }

      // numbers.forEach(myFunction);
      // function myFunction(value, index, array) {
      //   txt = txt + value + "<br>";
      // }


      // createCarousel.innerHTML = filteredResultImages.map(data => {
      //   `<div class="carousel-inner">
      //     <div class="carousel-item active">
      //       <img src="${data.url}" class="d-block w-100" alt="...">
      //     </div>
      //     <div class="carousel-item">
      //       <img src="${data.url}" class="d-block w-100" alt="...">
      //     </div>
      //     <div class="carousel-item">
      //       <img src="${data.url}" class="d-block w-100" alt="...">
      //     </div>
      //   </div>
      //   <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
      //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Previous</span>
      //   </a>
      //   <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
      //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Next</span>
      //   </a>
      //     `
      // })


      //   createCarousel.innerHTML = result.images.filter(Data =>
      //     `<div class="carousel-inner">
      //   <div class="carousel-item active">
      //       <img src="..." class="d-block w-100" alt="...">
      //   </div>
      //   <div class="carousel-item">
      //     <img src="..." class="d-block w-100" alt="...">
      //   </div>
      //   <div class="carousel-item">
      //     <img src="..." class="d-block w-100" alt="...">
      //   </div>
      // </div>
      // `)
    })
}