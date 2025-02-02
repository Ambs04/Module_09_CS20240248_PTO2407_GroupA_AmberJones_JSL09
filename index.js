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
function currentTime() {
  //retrieve current date and time
  const date = new Date();
  // declare variable for period
  let period = "";
  // add if statement to determine the period for the current time
  if (date >= 12) {
    period = "PM";
  } else if (date < 12) {
    period = "AM";
  }
  // print time and period to the DOM element and use method to extract localised time
  document.getElementById("time").textContent =
    date.toLocaleTimeString("en-ZA", { timeStyle: "short" }) + " " + period;
}

//use setInterval to update time in currentTime function, every second
setInterval(currentTime, 1000);

//SECTION 4 -WEATHER SECTION

//get location to set up the weather section
//use geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  //use fetch in position function to retriev API data
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      //create promise rejection error message
      if (!res.ok) {
        throw Error("Weather data is not available.");
      }
      return res.json();
    })
    .then((data) => {
      //console.log(data)
      //declare variable to hold weather icon url with dynamic access
      let urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      //print the icon/temp/location to DOM
      document.getElementById("weather").innerHTML = `
      <img src=${urlIcon} />
      <p class='weather-temp'>${Math.round(data.main.temp)} deg</p>
       <p class='weather-city'>${data.name}</p>
      `;
    })
    .catch((err) => console.log(err));
});

//SECTION 5 - PERSONAL TOUCHES
//To-do list section

document.getElementById("to-do-btn").addEventListener("click", function () {
  //open link in new tab when button is clicked - opens note/schedule website in new tab
  window.open("https://www.monday.com", "_blank");
});
