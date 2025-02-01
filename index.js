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
    document.body.style.backgroundImage =
      //target url and picture size
      `url(${data.urls.regular})`;
    //get photographer name and link to DOM
    //locate in the data
    document.getElementById(
      "author"
    ).textContent = `Image By: ${data.user.name}`;
  });
