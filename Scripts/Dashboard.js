$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

var token = localStorage.getItem("code");
if (token == "secret") {
} else {
  window.location.href = "Login.html";
}
