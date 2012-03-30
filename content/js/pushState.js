var list = document.getElementById("push_state_links");
var links = list.getElementsByTagName("a");

function fetchLogo(e) {
  fetchPage(this.href);

  alert("Setting Push State: " + this.href);
  history.pushState(null, null, this.href);

  e.preventDefault();
}

for(var i=0; i < links.length; i++) {
  links[i].addEventListener("click", fetchLogo, false);
}

function fetchPage(url) {
  alert("Fetching via AJAX: " + url);

  var req = new XMLHttpRequest();
  req.open("GET",url,false);
  req.send(null);

  if (req.status == 200) {
    var fullText = req.responseText;
    var pattern = /<div id=\"logo\">([\s\S]*)<\/div><!-- END LOGO -->/;
    var text = fullText.match(pattern)[1];
    document.getElementById("logo").innerHTML = text;
    return true;
  }
  return false;
}