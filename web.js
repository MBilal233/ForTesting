const menubtn = document.querySelector('.menubtn');
const ul = document.querySelector('.ul');
const navbarParent = document.querySelector('.navbar-parent');
const Btn = document.getElementById('Btn');
menubtn.addEventListener('click' , () =>{
    ul.classList.toggle('navbar-nav-ul')
    console.log(ul)
}
    )

    window.addEventListener('scroll',() =>{
        if(window.scrollY > 200){
            navbarParent.classList.add('navbar-parent-scroll');
        }else{
            navbarParent.classList.remove('navbar-parent-scroll');
        }
    })





    const logout = document.querySelector('.logout');
    logout.addEventListener('click',() =>{
        localStorage.clear();
        window.location.assign('/ForTesting/register.html');
    })