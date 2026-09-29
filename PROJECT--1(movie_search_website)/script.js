const movieinput = document.getElementById("movieinput")
const btn = document.getElementById("btn1")
const moviecontainer = document.getElementById("moviecontainer")
const apikey = "56aa4cab"
const btn2 = document.getElementById("btn2")
const moviedetails = document.getElementById("moviedetails")
const movieModal = document.getElementById("modal");

btn.addEventListener("click", function () {
    const moviename = movieinput.value.trim();


    if (moviename === "") {
        alert("PLEASE ENTER MOVIE NAME");
        return;
    }

    searchmovie(moviename);
});

function searchmovie(moviename) {
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            if (data.Response === "False") {
                moviecontainer.innerHTML = ` <h2>${data.Error}</h2> `;
                return;
            }
            displaymovies(data.Search);
        });
}

function displaymovies(movies) {
    moviecontainer.innerHTML = "";
    movies.forEach(function(movie){
        const moviecard = document.createElement("div");
        moviecard.classList.add("moviecard")
        moviecard.innerHTML = `
         <img
                src="${movie.Poster}"
                alt="${movie.Title}"
            >
        <div class="movie-info">
            <h3>${movie.Title}</h3> 
            <p>Year: ${movie.Year}</p> 
            <p>Type: ${movie.Type}</p> 
        </div> 
        `;

        moviecard.addEventListener("click", function () {
            getmoviedetails(movie.imdbID);
        });
        moviecontainer.appendChild(moviecard)
    });
}

function getmoviedetails(imdbID) {
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}&plot=full`)
        .then(function (response) {
            return response.json();
        })
        .then(function (movie) {
            console.log(movie);


            moviedetails.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" >
            <div id="detailsinfo"> 
                 <h2> ${movie.Title} </h2> 
                 <p> 
                    <strong>IMDb Rating:</strong> 
                ⭐ ${movie.imdbRating} </p> 
                 <p> 
                    <strong>Released:</strong> 
                ${movie.Released} </p> 
                <p> 
                    <strong>Runtime:</strong>
                ${movie.Runtime} </p> 
                <p> 
                    <strong>Genre:</strong> 
                ${movie.Genre} </p> 
                <p> 
                    <strong>Director:</strong> 
                ${movie.Director} </p> 
                <p> 
                    <strong>Actors:</strong>
                 ${movie.Actors} </p> 
                 <p> 
                    <strong>Language:</strong>
                 ${movie.Language} </p> 
                 <p id="plot">
                    <strong>Plot:</strong> 
                ${movie.Plot} </p> 
            </div>
            `;

            movieModal.style.display = "flex";

        })
}

btn2.addEventListener("click", function(){ 
    movieModal.style.display = "none"; 
});
