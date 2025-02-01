//SECTION 1 - BACKGROUND

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
    //set a promise-rejection handler
  })

  .catch((err) => {
    //set a defaullt image if the promise is rejected
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1516718674638-5dd513524b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg0MTY1MTJ8&ixlib=rb-4.0.3&q=80&w=1080')`;
  });

//SECTION 2 - CRYPTO INFO

//fetch data from the coingecko API
fetch("https://api.coingecko.com/api/v3/coins/ethereum", { method: "GET" })
  // add throw function to stop code execution and execute an error message
  .then((res) => {
    //if statement to check status of request/process
    if (!res.ok) {
      throw Error("Something went wrong 😞");
    }
    return res.json();
  })
  .then((data) => {
    //console.log(data)
    //get crypto name and image and add it to element in DOM
    document.getElementById(
      "crypto-top"
    ).innerHTML = `<img src=${data.image.small}/> <span>${data.name}</span>`;
    //access and add prices to the crypto section
    document.getElementById("crypto").innerHTML +=
      //normal price
      // 24hr high price
      // 24hr low price
      `
    <p>R ${data.market_data.current_price.zar}</p>
    <p>R ${data.market_data.high_24h.zar}</p>
    <p>R ${data.market_data.low_24h.zar}</p>
    `;
  })

  //create catch to display the error message if there is an error in the promise
  .catch((err) => console.log(err));

//SECTION 3 - TIME

//Add time
// create function to retrieve the current time and also add a period [AM/PM]
function currentTime() {}
