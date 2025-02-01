//Get photo from Unsplash API
//use scrimba api - https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=pastel

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=pastel",
  { method: "GET" }
)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)
    //link picture to DOM body
    document.style.backgroundImage =
      //target url and picture size
      `url(${data.urls.regular})`;
  });
