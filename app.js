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
      let a = document.createElement("div");
      a.className = "see-in-detail";
      a.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   see in datail </button>`;
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
        seeInDetail(res);
      });
      // a.innerText = "See In Detail";
      movieBox.appendChild(a);
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
      let a = document.createElement("div");
      a.className = "see-in-detail";
      a.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   see in datail </button>`;
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
        seeInDetail(res);
      });
      // a.innerText = "See In Detail";
      movieBox.appendChild(a);
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
  await movies(search);
});

let url =
  "https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=";
let num2 = 1;
async function movies(search) {
  ct4.innerText = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Related movies : ${search} Page: ${num2}`;
  ct4.appendChild(h1);
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=${search}&page=${num2}`,
      config
    );
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
      let a = document.createElement("div");
      a.className = "see-in-detail";
      a.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   see in datail </button>`;
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
        seeInDetail(res);
      });
      // a.innerText = "See In Detail";
      movieBox.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.innerText = "NEXT";
    btn3.onclick = () => {
      console.log(search);
      ct4.innerHTML = "";
      num2 = num2 + 1;
      moviesnext(search);
    };
    ct4.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}

///next
let num5 = 2;
async function moviesnext(search) {
  ct4.innerText = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Related movies : ${search} Page: ${num5}`;
  ct4.appendChild(h1);
  try {
    let config = {
      Headers: {
        Accept: "application/jason",
        Key: "dd108ed11f35010d3de9661e82890d62",
      },
    };
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=dd108ed11f35010d3de9661e82890d62&query=${search}&page=${num5}`,
      config
    );
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
      let a = document.createElement("div");
      a.className = "see-in-detail";
      a.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   see in datail </button>`;
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
        seeInDetail(res);
      });
      // a.innerText = "See In Detail";
      movieBox.appendChild(a);
    }
    let btn3 = document.createElement("button");
    btn3.className = "btn btn-dark";
    btn3.innerText = "NEXT";
    btn3.onclick = () => {
      num5 = num5 + 1;
      moviesnext(search);
    };
    ct4.appendChild(btn3);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}

///see in detailed
function seeInDetail(res) {
  let mh1 = document.querySelector("#staticBackdropLabel");
  mh1.innerText = res.data.original_title;

  let md = document.querySelector(".modal-body");
  md.innerHTML = "";
  let p1 = document.createElement("p");
  p1.innerText = res.data.overview;
  md.appendChild(p1);
  if (res.data.adult == true) {
    let adult = document.createElement("div");
    adult.className = "btn btn-danger";
    adult.innerText = "adult";
    md.appendChild(adult);
  }
  let bkdpath = document.createElement("img");
  bkdpath.className = "movie-img";
  bkdpath.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`
  );
  md.appendChild(bkdpath);
  let dd = document.createElement("div");
  md.appendChild(dd);
  let ddname = document.createElement("a");
  let ddimg1 = document.createElement("img");
  let ddimg2 = document.createElement("img");
  ddname.innerText = `Belongs to ${res.data.belongs_to_collection.name}`;
  ddimg1.className = "smimg";
  ddimg1.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${res.data.belongs_to_collection.backdrop_path}`
  );
  ddimg2.className = "smimg";
  ddimg2.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${res.data.belongs_to_collection.poster_path}`
  );
  dd.appendChild(ddname);
  dd.appendChild(ddimg1);
  dd.appendChild(ddimg2);
  let p2 = document.createElement("p");
  p2.innerHTML = `Budget: ${res.data.budget},<br> Origin Country: ${res.data.origin_country},
        <br> Original Language: ${res.data.original_language},
         <br> Release Date: ${res.data.release_date}, <br>
         Revenue : ${res.data.revanue},<br> Tagline: ${res.data.tagline}`;
  md.appendChild(p2);
  let link = document.createElement("a");
  link.setAttribute("href", res.data.homepage);
  link.innerText = "Link ->";
  md.appendChild(link);
}
