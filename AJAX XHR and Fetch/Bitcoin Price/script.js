var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
