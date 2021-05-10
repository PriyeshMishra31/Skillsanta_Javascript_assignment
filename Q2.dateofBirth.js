let DOB = new Date(prompt("Enter your DOB")).getTime();

const today = new Date().getTime();

let diff = Math.floor(today - DOB);

diff /= 60 * 60 * 24 * 1000;

let years = Math.abs(Math.round(diff / 365.25));

if (years >= 18 && years <= 44)
  
window.open("https://selfregistration.cowin.gov.in");

  else alert("No need to register you are underage");
