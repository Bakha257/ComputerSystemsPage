/*header*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myheader").style.fontSize = "17px";
    document.getElementById("myheader").style.backgroundColor = "#24dff8";
    document.getElementById("myheader").style.paddingTop = "7px";
    document.getElementById("nav-toggle").style.paddingTop = "1px";
  } else {
    document.getElementById("myheader").style.fontSize = "20px";
    document.getElementById("myheader").style.backgroundColor = "";
    document.getElementById("myheader").style.paddingTop = "30px";
    document.getElementById("nav-toggle").style.paddingTop = "20px";
  }
}

$(document).ready(function() {
  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    $(".nav").toggle();
  });
});

/*Copy to CLipboard*/
function Copy(elementId) {
  var text = document.getElementById(elementId).innerText;

  var tempInput = document.createElement("input");
  tempInput.style.opacity = 0;
  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  document.body.removeChild(tempInput);

  alert("Text copied to clipboard: " + text);
}

/*ScrolltoTop Button*/
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  var button = document.querySelector('.back-to-top');
  if (window.scrollY > 50) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
});

   