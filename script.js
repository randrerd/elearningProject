let navLogo = document.querySelector(".logoLink");
let searchbar = document.querySelector('#searchbar');

searchbar.addEventListener('focus', function() {
  navLogo.classList.add('hide');
});
searchbar.addEventListener('focusout', function() {
  navLogo.classList.remove('hide');
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: true,
  imagesLoaded: true, 
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

new SimpleBar(document.getElementById('dropdownContent'), {
  scrollbarMinSize: 30,
  scrollbarMaxSize: 40,
});



