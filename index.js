var onChangePage = function(response) {
  console.log(response);
}

window.onhashchange = function(event) {
  var hash = window.location.hash.replace('#', '');
  var request = new XMLHttpRequest();
  request.onload = onChangePage;
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