window.onload = async function () {
    const genres = ["drama", "fantasy", "comedy", "adventure", "animation"]
    try {
        for (let i = 0; i < genres.length; i++) {
            const Movies = await loadMovies(genres[i])
            displayMovies(Movies)
        }
    } catch (error) {
        alert(error.message)
    }
}

async function loadMovies(genre) {
    const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/movies/${genre}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
            },

        })
    if (response.ok) {
        const movies = await response.json()
        return movies
    } else {
        throw new Error("Failed to fetch movies")
    }
}

function displayMovies(movies) {
    const genre = movies[0].category
    console.log('genre:', genre)
    const moviesGroup = document.getElementById(`${genre}-group`)
    console.log('moviesGroup:', moviesGroup)
    moviesGroup.innerHTML = ""
    for (let movie of movies) {
        moviesGroup.innerHTML +=
            `
        <div class="col-xs-4 text-center mb-3 mb-lg-0 px-1">
          <a href="backoffice.html?id=${movie._id}&${movie.category}"><img class="img-fluid rounded" src="${movie.imageUrl}" width="200px"/>
          <p>${movie.name}</p></a>
        </div>
        `
    }
}