const params = new URLSearchParams(location.search)
const id = params.get('id')
const MovieName = params.get('name')
const MovieDescription = params.get('description')
const MovieCategory = params.get('category')
const MovieImageUrl = params.get('imageUrl')

const endpoint =
    id
        ? "https://striveschool-api.herokuapp.com/api/movies/" + id
        : "https://striveschool-api.herokuapp.com/api/movies/"

const method = id ? "PUT" : "POST"

const operation = document.querySelector("#operation")

window.onload = async () => {

    if (id) {
        document.getElementById("movie-id").innerHTML = `You Selected the Movie with ID:<br> ${id} <br> You can Delete of edit the movie right now`
        operation.innerHTML = "Editing Movie"

        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
                }
            })

            if (!response.ok) {
                if (response.status === 404) {
                    location.assign("movies.html")
                    throw new Error("This movie does not exist!")
                    // go to catch block
                }
                throw new Error("Something went wrong with code " + response.status)
                // go to catch block
            }

            const movie = await response.json()
            populateFields(movie)

        } catch (error) {
            console.log(error)
            alert(error.message)
            // from here, continue
        }

        document.querySelector('#delete-btn').classList.remove("d-none")

    } else {
        operation.innerHTML = "Adding New Movie"
    }
}

function populateFields(movie) {
    document.querySelector('#name').value = MovieName
    document.querySelector('#description').value = MovieDescription
    document.querySelector('#movie-category').value = MovieCategory
    document.querySelector('#movie-poster').value = MovieImageUrl
}

async function handleSubmit(event) {
    event.preventDefault(); // prevents the default handling by the browser

    setLoading(true)

    const newMovie = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        category: document.querySelector("#movie-category").value,
        imageUrl: document.querySelector("#movie-poster").value
    };

    console.log(newMovie)

    try {
        const response = await fetch(endpoint, {
            method, // "GET", "POST", "PUT", "DELETE"
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
            },
            body: JSON.stringify(newMovie)
        })

        // What could possibly go wrong?
        // - wrong keys
        // - wrong endpoint
        // - duplicate entry
        // - wrong HTTP verb

        if (!response.ok) {
            const data = await response.json()
            const code = data.error.code

            if (code === 11000) {
                throw new Error("This movie already exists!")
            }
            else throw new Error("Failed to post")
        }

        const data = await response.json()

        alert(`movie ${id ? "updated" : "added"} successfully with id ${data._id}`)
        location.assign("movies.html")

    } catch (error) {
        console.log(error)
        alert(error.message)
    } finally {
        setLoading(false)
    }

}

async function deletemovie() {
    setLoading(true)

    try {
        const response = await fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
            }, method: "DELETE"
        })
        if (!response.ok) throw new Error("Something went wrong")

        alert("movie deleted successfully")
        location.assign("movies.html")

    } catch (error) {
        console.log(error)
        alert(error.message)
    }

    setLoading(false)

}

function setLoading(loading) {
    if (loading) {
        document.querySelector("#spinner").classList.remove("d-none")
    } else {
        document.querySelector("#spinner").classList.add("d-none")
    }
}