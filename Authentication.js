const userData = JSON.parse(localStorage.getItem("userData"));

const isAuthenticated = false;

const path = window.location.pathname;
console.log(path);

if (!userData && window.location.pathname === "/ForTesting/" || window.location.pathname === "/ForTesting/index.html" ) {
  window.location.assign("/ForTesting/register.html");
}
//   window.location.assign("/ForTesting/")
//   console.log('hello world')
// }

// console.log(userData && window.location.pathname === "/ForTesting/register.html" || window.location.pathname === '/ForTesting/register' ? window.location.assign("/ForTesting/") : console.log('userData is not exist')  )
// console.log(userData)

// console.log(userData !== null && window.location.pathname === "/ForTesting/register.html" || window.location.pathname === '/ForTesting/register')