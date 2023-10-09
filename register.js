const Name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (Name.value === "" || email.value === "" || password.value === "") {
    if (Name.value === "") {
      Name.classList.add("validate");
    } else {
      Name.classList.remove("validate");
    }
    if (email.value === "") {
      email.classList.add("validate");
    } else {
      email.classList.remove("validate");
    }
    if (password.value === "") {
      password.classList.add("validate");
    } else {
      password.classList.remove("validate");
    }
  } else {
    const userData = {
      name: Name.value,
      email: email.value,
      password: password.value,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    Name.value = "";
    email.value = "";
    password.value = "";
    Name.classList.remove("validate");
    email.classList.remove("validate");
    password.classList.remove("validate");

    window.location.assign("/ForTesting/index.html");
  }
});

if(Name.classList.contains('validate')){
    console.log('hello world')
}
