const elSiteInput = document.querySelector(".site-input");
const elBtn = document.querySelector(".btn")
const elOnFootResult = document.querySelector(".on-foot-hour");
const elVelikResult = document.querySelector(".velik-hour");
const elMoshinaResult = document.querySelector(".moshina-hour");
const elAirResult = document.querySelector(".air-hour");

elSiteInput.addEventListener("click", e=> {
  var inputValue = e.target.value;

  elOnFootResult.textContent = ((inputValue / 3) * 10).toFixed(1)
  elVelikResult.textContent = ((inputValue / 20.1) * 10).toFixed(2)
  elMoshinaResult.textContent = ((inputValue / 120) * 10).toFixed(2)
  elAirResult.textContent = ((inputValue / 800) * 10).toFixed(2)
})