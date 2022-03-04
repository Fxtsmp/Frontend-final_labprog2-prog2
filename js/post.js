const btnSinIn = document.querySelector('.register'),
      btnSinup = document.querySelector('.Login'),
      singIn = document.querySelector('.sing-in'),
      singUp = document.querySelector('.sing-up');

document.addEventListener('click', e=>{
    if(e.target ===btnSinIn || e.target === btnSinup){
        singUp.classList.toggle('active');
        singIn.classList.toggle('active')
    }
})

const form = document.getElementById("form")

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')
    prueba(form);
    
})

async function prueba(form){
    let datos= new FormData(form)
    prueba= await fetch('https://eduars.pythonanywhere.com/login',{
        method:'POST',
        body:datos
    },)
    console.log(prueba)
}
