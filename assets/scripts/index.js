

let languageLower = document.querySelector('.language-lower');

function toggleLanguage () {
	if (languageLower.style.display == 'none') {
		languageLower.style.display = 'block';
	} else {
		languageLower.style.display = 'none';
	}
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

var mobileLinks = document.getElementById("mobile-links");
var mobileLanguageBox = document.getElementById("mobile-language-box");


function showMobileLinks() {
	hideMenu(mobileLanguageBox);
  if (mobileLinks.style.display === "flex") {
    mobileLinks.style.display = "none";
    document.body.style.overflow = 'auto';
  } else {
    mobileLinks.style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
}

function showMobileLanguageBox() {
	hideMenu(mobileLinks);
  if (mobileLanguageBox.style.display === "flex") {
    mobileLanguageBox.style.display = "none";
    document.body.style.overflow = 'auto';
  } else {
    mobileLanguageBox.style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
}

function hideMenu (menu) {
	menu.style.display = "none";
}




/* Mobile Search Box */
let mobileSearchIcon = document.querySelector("#mobile-search-icon-box");
let mobileSearchInput = document.querySelector("#mobile-search-input");

mobileSearchIcon.addEventListener('click', showMobileSearchInput);

function showMobileSearchInput () {
	mobileSearchInput.style.display = 'inline-block';
}

function hideAllModals () {
  hideMenu(mobileLinks);
  hideMenu(mobileLanguageBox);
  document.body.style.overflow = 'auto';
}

window.addEventListener('resize', hideAllModals)