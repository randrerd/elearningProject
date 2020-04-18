var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

let btn = document.getElementById("navButton");
let navLinks = document.getElementById("navLinks");

btn.onclick = function () {
  btn.classList.toggle("is-active");
  navLinks.classList.toggle("mobile");
};

let dropdownBtn = document.getElementById("dropdownButton");
let dropdownCon = document.getElementById("dropdownContent");

dropdownBtn.onclick = function() {
  dropdownCon.classList.toggle("dropdown");
};