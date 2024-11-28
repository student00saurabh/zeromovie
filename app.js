let inp = document.querySelector("input");
let btn = document.querySelector("#search-button");
let secondContainer = document.querySelector(".second-contenar");

let num = 1;
btn.addEventListener("click", async function movieCall() {
  let search = inp.value + `&page=`;
  await movies(search);
});

let url =
  "https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=";

async function movies(search) {
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(url + search + num, config);
    inp.value = " ";
    console.log(res.data);
    secondContainer.innerHTML = "";
    let movies = res.data.results;
    for (m of movies) {
      let movieBox = document.createElement("div");
      movieBox.className = "movie-contenar";
      secondContainer.appendChild(movieBox);
      let img = document.createElement("img");
      img.className = "movie-img";
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500${m.poster_path}`
      );
      movieBox.appendChild(img);
      let h4 = document.createElement("h4");
      h4.innerText = m.original_title;
      movieBox.appendChild(h4);
      let p = document.createElement("p");
      p.innerHTML = `Language: ${m.original_language}, Ratting: ${m.vote_average} <br> Release Date : ${m.release_date}`;
      movieBox.appendChild(p);
      let button = document.createElement("button");
      button.className = "btn";
      movieBox.appendChild(button);
      let a = document.createElement("a");
      a.setAttribute(
        "href",
        `GET https://api.themoviedb.org/3/movie/${m.id}?api_key=dd108ed11f35010d3de9661e82890d62`
      );
      a.innerText = "See In Detail";
      button.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.innerText = "NEXT";
    search = search + `&page=${num}`;
    btn3.onclick = () => {
      num = num + 1;
      secondContainer.innerHTML = "";
      movies(search);
    };
    secondContainer.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}

//popular movies: api
let url2 = `https://api.themoviedb.org/3/movie/popular?api_key=dd108ed11f35010d3de9661e82890d62&page=`;
num = 1;
async function popularmovies(num) {
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(url2 + num, config);
    console.log(res.data);
    console.log(res.data.results);
    let movies = res.data.results;
    for (m of movies) {
      let movieBox = document.createElement("div");
      movieBox.className = "movie-contenar";
      secondContainer.appendChild(movieBox);
      let img = document.createElement("img");
      img.className = "movie-img";
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500${m.poster_path}`
      );
      movieBox.appendChild(img);
      let h4 = document.createElement("h4");
      h4.innerText = m.original_title;
      movieBox.appendChild(h4);
      let p = document.createElement("p");
      p.innerHTML = `Language: ${m.original_language}, Ratting: ${m.vote_average} <br> Release Date : ${m.release_date}`;
      movieBox.appendChild(p);
      let button = document.createElement("button");
      button.className = "btn";
      movieBox.appendChild(button);
      let a = document.createElement("a");
      a.setAttribute(
        "href",
        `GET https://api.themoviedb.org/3/movie/${m.id}?api_key=dd108ed11f35010d3de9661e82890d62`
      );
      a.innerText = "See In Detail";
      button.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.innerText = "NEXT";
    btn3.onclick = () => {
      num = num + 1;
      secondContainer.innerHTML = "";
      popularmovies(num);
    };
    secondContainer.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
popularmovies(num);
