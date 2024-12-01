let inp = document.querySelector("input");
let btn = document.querySelector("#search-button");
let ct1 = document.querySelector(".first-contenar");
let secondContainer = document.querySelector(".second-contenar");
let ct3 = document.querySelector(".third-contenar");
let ct4 = document.querySelector(".fourth-contenar");
let ct5 = document.querySelector(".fifth-contenar");

let num = 1;

//popular movies: api
let url2 = `https://api.themoviedb.org/3/movie/popular?api_key=dd108ed11f35010d3de9661e82890d62&page=`;
num = 1;
async function popularmovies(num) {
  let h1 = document.querySelector("#scrollspyHeading2");
  h1.innerText = `Popular Movies Page: ${num}`;
  let mb = document.createElement("div");
  mb.className = "movie-box";
  secondContainer.appendChild(mb);
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
      mb.appendChild(movieBox);
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
      a.className = "see-in-detail";
      let url3 = `https://api.themoviedb.org/3/movie/${m.id}?api_key=dd108ed11f35010d3de9661e82890d62`;
      let moviepage = 1;
      a.addEventListener("click", async (moviepage) => {
        let config = {
          Headers: {
            Accept: "application/jason",
            Key: "dd108ed11f35010d3de9661e82890d62",
          },
        };
        let res = await axios.get(url3, config);
        console.log(res.data);
      });
      a.innerText = "See In Detail";
      button.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.setAttribute("href", "#scrollspyHeading2");
    btn3.innerText = "NEXT";
    btn3.onclick = () => {
      num = num + 1;
      mb.innerText = "";
      popularmovies(num);
    };
    mb.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
popularmovies(num);

//trending
let num3 = 1;
let url4 =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=dd108ed11f35010d3de9661e82890d62&page=";
async function trendingmovies(num3) {
  let h1 = document.querySelector("#scrollspyHeading3");
  h1.innerText = `Trending Movies Page: ${num3}`;
  let mb = document.createElement("div");
  mb.className = "movie-box";
  ct3.appendChild(mb);
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(url4 + num3, config);
    console.log(res.data);
    console.log(res.data.results);
    let movies = res.data.results;
    for (m of movies) {
      let movieBox = document.createElement("div");
      movieBox.className = "movie-contenar";
      mb.appendChild(movieBox);
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
      a.className = "see-in-detail";
      let url3 = `https://api.themoviedb.org/3/movie/${m.id}?api_key=dd108ed11f35010d3de9661e82890d62`;
      let moviepage = 1;
      a.addEventListener("click", async (moviepage) => {
        let config = {
          Headers: {
            Accept: "application/jason",
            Key: "dd108ed11f35010d3de9661e82890d62",
          },
        };
        let res = await axios.get(url3, config);
        console.log(res.data);
      });
      a.innerText = "See In Detail";
      button.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.setAttribute("href", "#scrollspyHeading3");
    btn3.innerText = "NEXT";
    btn3.onclick = () => {
      num3 = num3 + 1;
      mb.innerText = "";
      trendingmovies(num3);
    };
    mb.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
trendingmovies(num);

// search
btn.addEventListener("click", async () => {
  ct1.style.display = "none";
  secondContainer.style.display = "none";
  ct3.style.display = "none";
  ct4.style.display = "block";
  let search = inp.value;
  console.log("btn");
  await movies(search);
});

let url =
  "https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=";
let num2 = 1;
async function movies(search) {
  let h1 = document.createElement("h1");
  h1.innerText = `Related movies : ${search}`;
  ct4.appendChild(h1);
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(url + search, config);
    console.log(res.data);
    let movies = res.data.results;
    for (m of movies) {
      let movieBox = document.createElement("div");
      movieBox.className = "movie-contenar";
      ct4.appendChild(movieBox);
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
        `https://api.themoviedb.org/3/movie/${m.id}?api_key=dd108ed11f35010d3de9661e82890d62`
      );
      a.innerText = "See In Detail";
      button.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.innerText = "NEXT";
    num2 = num2 + 1;
    btn3.onclick = (search, num2) => {
      url = `https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=${search}&page=`;
      search = num2;
      movies(search);
    };
    ct4.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
