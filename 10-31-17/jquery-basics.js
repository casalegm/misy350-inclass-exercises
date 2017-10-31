function main() {
  $(`#google`).html("Goooooogle");
  //document.getElementById('google').innerHTML="Google";
  //let links = document.getElementsByClassName('my-link');
  let links = $(`.my-link`);
  links[0].innerHTML = "Twitter";
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML = "TBD";
  links[1].href = "#";

  //hide and show main text
  $(`#main-text`).hide();
  $(`#main-text`).fadeIn(5000);

  //hide projetcts
  $(`.projects`).hide();

  //button click
  $(`.my-buttons`).click(function(){
    $(this).next().slideToggle(500);
  })
}

$(document).ready(main);
