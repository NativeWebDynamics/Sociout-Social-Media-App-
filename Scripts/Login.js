localStorage.removeItem("code");
function Login() {
  var flag = false;
  var local_email = localStorage.getItem("email");
  var local_password = localStorage.getItem("Password");

  var Email = document.getElementById("Email").value;
  var Password = document.getElementById("Password").value;

  if (local_email === Email && local_password === Password) {
    localStorage.setItem("code", "secret");
    window.location.href = "Dashboard.html";
    document.getElementById("e-label").className = "hidden3";
  } else {
    document.getElementById("e-label").className = "text-danger";
  }
}


$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
