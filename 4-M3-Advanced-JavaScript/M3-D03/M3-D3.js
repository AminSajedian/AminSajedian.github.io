const loadImagesBtn = () => {
    document.querySelector("main div.album div.container div.row").innerHTML = ""
    const cardDiv = document.querySelector("main div.album div.container div.row")
    loadImagesQueryInput = document.getElementById("loadImagesQueryInput").value
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${loadImagesQueryInput}`)
        .then(resp => resp.json())
        .then(result => {
            // console.log('result:', result)
            // console.log('result.images:', result.images)
            console.log('result.images[0]:', result.images[0])
            console.log('result.images[1]:', result.images[1])
            // console.log(result.images[0].url)

            cardDiv.innerHTML += result.images.map(Data =>

                `<div class="col-md-4" id="cardId${Data.id}">
                <div class="card mb-4 shadow-sm">
                  <img src="${Data.url}" alt="ImageId:${Data.id}" class="card-img-top" style="height:300px;"/>
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
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
        })
}
const loadSecondaryImagesBtn = () => {
    document.querySelector("main div.album div.container div.row").innerHTML = ""
    const cardDiv = document.querySelector("main div.album div.container div.row")
    loadImagesQueryInput = document.getElementById("loadSecondaryImagesQueryInput").value
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${loadImagesQueryInput}`)
        .then(resp => resp.json())
        .then(result => {
            // console.log('result:', result)
            // console.log('result.images:', result.images)
            console.log('result.images[0]:', result.images[0])
            console.log('result.images[1]:', result.images[1])
            // console.log(result.images[0].url)

            cardDiv.innerHTML += result.images.map(Data =>

                `<div class="col-md-4" id="cardId${Data.id}">
                <div class="card mb-4 shadow-sm">
                  <img src="${Data.url}" alt="ImageId:${Data.id}" class="card-img-top" style="height:300px;"/>
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                      <!-- Button trigger modal -->
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#Modal${Data.id}">
                        VIEW
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
        })
}