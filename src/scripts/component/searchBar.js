class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
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
                    
            :host{
                width: 80%;
                position: relative;
                max-width: 800px;
                display: flex;
                align-items: center;
                align-self: center;
            }

            input[type="text"]{
                width: 100%;
                padding: .5rem;
                font-size: clamp(18px, 1.5vw, 800px);
                outline: none;
                border: none;
                border-bottom: 3px solid rgb(39, 42, 61);
                color: var(--text-color);
                background-color: var(--background-color);
            }

            button{
                height: 100%;
                outline: none;
                border: none;
            }

            .search-button{
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 0px;
                bottom: 0px;
                background-color: rgb(39, 42, 61);
                padding: .75rem;
            }

            .search-button .search{
                fill: var(--text-color);
            }

            .search-button:hover .search{
                fill: var(--primary);
            }
        </style>

        <input
          id="searchElement"
          type="text"
          placeholder="Cari judul film"
        />
        <button class="search-button" id="searchButtonElement">
          <svg class="search" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
        `;
    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
