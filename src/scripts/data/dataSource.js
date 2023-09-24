const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODVjY2RiNTI0NTE1MDA5N2ZiY2ZjNTY1MmI0YTUxNiIsInN1YiI6IjY1MGU2NTM2ZThkMGI0MDBlYjJlYjNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vgujLvfI1UqnvrxQIeUjl8wOsf8Ny4KVPh1eILcVz9M",
  },
};

class DataSource {
  static searchClub(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.total_results > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`);
        }
      });
  }
}

export default DataSource;
