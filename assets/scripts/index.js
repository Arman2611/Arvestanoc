

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
  } else {
    mobileLinks.style.display = "flex";
  }
}

function showMobileLanguageBox() {
	hideMenu(mobileLinks);
  if (mobileLanguageBox.style.display === "flex") {
    mobileLanguageBox.style.display = "none";
  } else {
    mobileLanguageBox.style.display = "flex";
  }
}

function hideMenu (menu) {
	menu.style.display = "none";
}




/* Desktop Searching */

let desktopSearchIcon = document.querySelector("#desktop-search-icon-box");
let desktopSearchInput = document.querySelector("#desktop-search-box-input");

function desktopSearch () {
  console.log('searching for ' + desktopSearchInput.value);
}




/* Mobile Searching */

let mobileSearchIcon = document.querySelector("#mobile-search-icon-box");
let mobileSearchInput = document.querySelector("#mobile-search-box-input");

mobileSearchIcon.addEventListener('click', showMobileSearchInput);

function showMobileSearchInput () {
	mobileSearchInput.style.display = 'inline-block';
  mobileSearchIcon.addEventListener('click', mobileSearch);
}

function mobileSearch () {
  console.log('searching for ' + mobileSearchInput.value);
}




/* Hide all modals when user resizes the window */

function hideAllModals () {
  hideMenu(mobileLinks);
  hideMenu(mobileLanguageBox);
  document.body.style.overflow = 'auto';
}
window.addEventListener('resize', hideAllModals)




/* Sign Up and Sign In Forms */

function showSignUpForm () {
  console.log('sign up')
};
function showSignInForm () {
  console.log('sign in')
};


