const popMovieList = () => {
  const url = "https://api.themoviedb.org";
  const imgUrl = "https://image.tmdb.org";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODVjY2RiNTI0NTE1MDA5N2ZiY2ZjNTY1MmI0YTUxNiIsInN1YiI6IjY1MGU2NTM2ZThkMGI0MDBlYjJlYjNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vgujLvfI1UqnvrxQIeUjl8wOsf8Ny4KVPh1eILcVz9M",
    },
  };

  fetch(`${url}/3/trending/movie/day?language=en-US`, options)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      renderAllMovies(responseJson.results);
    })
    .catch((err) => console.error(err));

  const renderAllMovies = (results) => {
    const listMovieElement = document.querySelector("#movieList");
    listMovieElement.innerHTML = "";

    results.forEach((movie) => {
      const posterURL = `${imgUrl}/t/p/w500/${movie.poster_path}`;
      const rating = parseFloat(movie.vote_average).toFixed(1);

      listMovieElement.innerHTML += `
        <div class="movie">
            <img src="${posterURL}" alt="${movie.title}"></img>
            <h3>${movie.title}</h3>
            <div class="rating">
                <svg class="star" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.star{fill:#ffc800}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p>${rating}/10 (${movie.vote_count})</p>
            </div>
        </div>
      `;
    });
  };
}

export default popMovieList;
