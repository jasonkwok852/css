function openTabMenu(evt, smhkmenu) {
  var i, smhktabcontent, smhktablinks;
  smhktabcontent = document.getElementsByClassName("smhktabcontent");
  for (i = 0; i < smhktabcontent.length; i++) {
    smhktabcontent[i].style.display = "none";
  }
  smhktablinks = document.getElementsByClassName("smhktablinks");
  for (i = 0; i < smhktablinks.length; i++) {
    smhktablinks[i].className = smhktablinks[i].className.replace(" active", "");
  }

  document.getElementById(smhkmenu).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
