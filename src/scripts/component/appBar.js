class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
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
            width: 100%;
            display: flex;
          }
          
          h1, span {
            font-family: "Consolas", sans-serif;
            font-size: clamp(24px, 2vw, 800px);
          }
          
          h1 {
            color: var(--primary);
            margin: 1rem;
          }
          
          span:nth-child(1) {
            color: var(--accent);
          }
          
          span:nth-child(2) {
            color: var(--text-color);
          }
        </style>

        <h1>isWatching.<span>movie</span><span>()</span></h1>
        `;
  }
}

customElements.define("app-bar", AppBar);
