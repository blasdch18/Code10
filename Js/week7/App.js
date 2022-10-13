const btnSearchMovies = document.querySelector("#search-btn");
const inputBrowser = document.querySelector(".browser-input");
const moviesContainer = document.querySelector(".movies-section");

const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

const response = await fetch(url);
const data = await response.json();
const movies = data.entries;

btnSearchMovies.onclick = () => {
    const content = inputBrowser.value;

    let moviesFiltered = movies.filter (
        (movie) => movie.title.toLowerCase().includes(content.toLowerCase())
    );

    getMovies(moviesFiltered);
};

function getMovies(listMovies = movies) {
    moviesContainer.innerHTML = "";
    listMovies.forEach(movie => {
        moviesContainer.innerHTML += `
            <div class="movie">
                <h3> ${movie.title} </h3>
                <p> ${movie.description} </p>
                <img src=${movie.images.posterArt.url} alt=""/>
            </div`;
    });
}