let toggleButton=document.getElementById('toggleButton')
let navBar=document.getElementById('navBar')

toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})