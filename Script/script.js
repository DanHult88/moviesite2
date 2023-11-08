// Focus functionality for buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("focus", () => {
        button.style.backgroundColor = "#357b00"; // Change background color on focus
    });

    button.addEventListener("blur", () => {
        button.style.backgroundColor = "#4dbf00"; // Restore background color on blur
    });
});

// Show/Hide Movies
const showMoviesContentButton = document.getElementById("showPopularContentButton1");
const movieListItems = document.querySelectorAll("#movies .movie-list-item1");
const featuredContent = document.querySelector(".featured-content");

let movieContentVisible = false;

showMoviesContentButton.addEventListener("click", function() {
    movieContentVisible = !movieContentVisible;
    if (movieContentVisible) {
        movieListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "block";
        });
        featuredContent.style.display = "none"; // Hide the featured content
        showMoviesContentButton.textContent = "Hide Movies";
    } else {
        movieListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "none";
        });
        featuredContent.style.display = "block"; // Show the featured content
        showMoviesContentButton.textContent = "Show Movies";
    }
});

// Show/Hide Series
const showSeriesContentButton = document.getElementById("showSeriesContentButton");
const seriesListItems = document.querySelectorAll("#series .movie-list-item2");

let seriesContentVisible = false;

showSeriesContentButton.addEventListener("click", function() {
    seriesContentVisible = !seriesContentVisible;
    if (seriesContentVisible) {
        seriesListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "block";
        });
        showSeriesContentButton.textContent = "Hide Series";
    } else {
        seriesListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "none";
        });
        showSeriesContentButton.textContent = "Show Series";
    }
});

// Show/Hide Popular
const showPopularContentButton = document.getElementById("showPopularContentButton");
const popularListItems = document.querySelectorAll("#popular .movie-list-item3");

let popularContentVisible = false;

showPopularContentButton.addEventListener("click", function() {
    popularContentVisible = !popularContentVisible;
    if (popularContentVisible) {
        popularListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "block";
        });
        showPopularContentButton.textContent = "Hide Popular";
    } else {
        popularListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "none";
        });
        showPopularContentButton.textContent = "Show Popular";
    }
});

// Show/Hide Trending
const showTrendingContentButton = document.getElementById("showTrendingContentButton");
const trendingListItems = document.querySelectorAll("#trending .movie-list-item4");

let trendingContentVisible = false;

showTrendingContentButton.addEventListener("click", function() {
    trendingContentVisible = !trendingContentVisible;
    if (trendingContentVisible) {
        trendingListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "block";
        });
        showTrendingContentButton.textContent = "Hide Trending";
    } else {
        trendingListItems.forEach(item => {
            const image = item.querySelector(".movie-list-item-img");
            image.style.display = "none";
        });
        showTrendingContentButton.textContent = "Show Trending";
    }
});

const sections = document.querySelectorAll(".movie-list-container");

sections.forEach(section => {
    const arrows = section.querySelectorAll(".arrow");
    const movieList = section.querySelector(".movie-list");

    const itemNumber = movieList.querySelectorAll("img").length;
    let clickCounter = 0;

    arrows.forEach((arrow, i) => {
        arrow.addEventListener("click", () => {
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                movieList.style.transform = `translateX(${
                    movieList.computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
            } else {
                movieList.style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });
    });

    console.log(Math.floor(window.innerWidth / 270));
});
const darkmode = document.querySelector(".toggle-darkmode");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

darkmode.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  darkmode.classList.toggle("active");
});