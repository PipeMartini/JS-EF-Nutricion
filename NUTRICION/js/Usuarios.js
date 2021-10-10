function Login() {
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if (usuario == "pipe" && password == "12321") {
        window.location = "index.html"
    }
    if (usuario == "nutricion" && password == "Nutricion2021") {
        window.location = "index.html"
    }
    if (usuario == "" && password == "") {
        window.location = "Login.html"
    }
}