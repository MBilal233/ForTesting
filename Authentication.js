const userData = JSON.parse(localStorage.getItem("userData"));

const isAuthenticated = false;

const path = window.location.pathname;
console.log(path);

if (!userData && window.location.pathname === "index.html") {
  window.location.assign("/register.html");
}
if (userData && window.location.pathname === "register.html" || window.location.pathname === 'register') {
  window.location.assign("index.html");
}
