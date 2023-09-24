import "../component/searchBar.js";
import "../component/movieList.js";
import DataSource from "../data/dataSource.js";
import popMovieList from "../component/popMovieList.js";
import $ from "jquery";

const main = () => {
  const searchInput = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");
  const searchResultTagElement = $("#searchResultTag");
  const searchTagIsInvisibile = searchResultTagElement.hasClass("hidden");

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const emptyResult = () => {
    movieListElement.renderEmpty();
  };

  searchInput.clickEvent = async () => {
    try {
      if (searchInput.value) {
        const result = await DataSource.searchClub(searchInput.value);
        renderResult(result);
        searchResultTagElement.toggleClass("hidden",!searchTagIsInvisibile);
      } else {
        searchResultTagElement.toggleClass("hidden",searchTagIsInvisibile);
        emptyResult();
      }
    } catch (message) {
      searchResultTagElement.toggleClass("hidden", !searchTagIsInvisibile);
      fallbackResult(message);
    }
  };

  const slideSection = $("#searchSection");
  const images = [
    "https://media.glamour.com/photos/56957a138fa134644ec21f46/16:9/w_2580,c_limit/entertainment-2014-02-03-titanic-main.jpg",
    "https://i.ytimg.com/vi/oBqqI6NMeaM/maxresdefault.jpg",
    "https://www.metaflix.com/wp-content/uploads/2020/08/Kill-Bill-Vol-1-Swordfight-2048x1151.jpg",
    "https://media.wired.co.uk/photos/6287be835608c17c6252fca3/16:9/w_1280,c_limit/Best-Sci-Fi-Movies-Dune-Culture-Everett-MCDDUNE_WB002.jpg",
    "https://wallpaperswide.com/download/avatar_2009_movie_3-wallpaper-1366x768.jpg"
  ];
  
  let currentIndex = 0;

  const changeBackground = () => {
    slideSection.css('background-image', `url('${images[currentIndex]}')`);
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 5000);
  popMovieList();
}

export default main;
