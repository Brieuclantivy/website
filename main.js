// I suck at JS okay, don't judge. I know this is horrendous. Heavy copy/paste junk.
// Code is commented more than it needs to be because I'm still learning and the comments are basically post-it notes to help me remember.
// Ajax is entirely pointless for this site, but I did it to learn.

// Find all our buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Create variables that will get populated by loadContent() later
var page1 = "pages/about.html";
var page2 = "pages/social.html";
var page3 = "pages/projects.html";

const contentArea = document.getElementById("page");

// Very bad function to get rid of the "active" class wherever it is atm
function resetButtons() {
  button1.className = "nav-button";
  button2.className = "nav-button";
  button3.className = "nav-button";
}

function httpGet(myUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(contentArea, xmlHttp.responseText);
  }
  xmlHttp.open("GET", myUrl, true);
  xmlHttp.send(null);
}

function activatePage(navbutt, source) {
  resetButtons();
  navbutt.className += " active";
  console.log("there's absolutely no reason for this site to use ajax lmao");
  httpGet(source, setContent);
}

function setContent(target, payload) {
  target.innerHTML = payload;
}

function initialContent() {

  // Slap on all the event listeners
  button1.addEventListener('click', function() { 
    activatePage(button1, page1);
  }, false);
    button2.addEventListener('click', function() { 
    activatePage(button2, page2);
  }, false);
    button3.addEventListener('click', function() { 
    activatePage(button3, page3);
  }, false);

  setContent(contentArea, '<p class="initial-text"><i class="fa fa-arrow-up" aria-hidden="true"></i><br>Click a button!</p>');
}

initialContent();
