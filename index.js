var DEFAULT_PAGE = 'about';

// Given an HTML string response, set it as the page content.
var onChangePage = function(/*string*/ response) {
  var body = document.getElementById('body');
  body.innerHTML = response;
}

// Given a URL, load the contents into the body of the page.
var loadPage = function(/*string*/ url) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      onChangePage(request.responseText);
    }
  };
  request.open('GET', url, true);
  request.send();
};

var loadPageAndUpdateNavFromCurrentHash = function() {
  var hash = window.location.hash.replace('#', '') || DEFAULT_PAGE;

  var links = {
    about: document.getElementById('nav-about'),
    projects: document.getElementById('nav-projects')
  };

  for (var link_name in links) {
    if (links.hasOwnProperty(link_name)) {
      if (link_name === hash) {
        links[link_name].classList.add('selected');
      } else {
        links[link_name].classList.remove('selected');
      }
    }
  }

  loadPage(hash + '.html');
}

window.onhashchange = loadPageFromCurrentHash;
window.onload = loadPageFromCurrentHash;