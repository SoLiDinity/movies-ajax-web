import "./movieItem.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderEmpty() {
    this.shadowDOM.innerHTML = "";
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            .placeholder {
                font-weight: lighter;
                color: rgba(255, 255, 255, 0.35);
                user-select: none;
                align-self: center;
            }
        </style>

        <h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }
}

customElements.define("movie-list", MovieList);
