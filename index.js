var onChangePage = function(response) {
  var body = document.getElementById('body');
  body.innerHTML = response;
}

window.onhashchange = function(event) {
  var hash = window.location.hash.replace('#', '');
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      onChangePage(request.responseText);
    }
  };
  request.open('GET', hash + '.html', true);
  request.send();
};

window.onload = function() {
  var nav_links = document.getElementById('nav').getElementsByTagName('a');

  var onClickNavLink = function(event) {
    for (var i = 0; i < nav_links.length; i++) {
      nav_links[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

  for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].onclick = onClickNavLink;
  }
}