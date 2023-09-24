class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            :root{
                --text-color: #ffffff;
                --background-color: #1a1c29;
                --primary: #d7c15d;
                --secondary: #273057;
                --accent: #bf4545;
            }

            *{
                padding: 0;
                margin: 0;
            }

            :host{
                display: block;
                box-sizing: border-box;
                width: 12vw;
                min-width: 160px;
                background-color: var(--secondary);
                color: var(--text-color);
                padding: 1rem;
                margin: .5rem .5rem;
                border-radius: 10px;
                font-size: 14px;
            }
            
            img{
                width: 100%;
                border-radius: 5px;
            }
            
            .rating{
                display: flex;
                align-items: baseline;
            }
            
            h3, p{
                margin-top: .5rem;
            }
            
            p{
                margin-left: .25rem;
            }
            
            @media (max-width: 430px) {
                :host{
                    width: 100%;
                }
            }
        </style>

        <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.title}"></img>
        <h3>${this._movie.title}</h3>
        <div class="rating">
            <svg class="star" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.star{fill:#ffc800}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            <p>${parseFloat(this._movie.vote_average).toFixed(1)}/10 (${this._movie.vote_count})</p>
        </div>
        `;
  }
}

customElements.define("movie-item", MovieItem);
