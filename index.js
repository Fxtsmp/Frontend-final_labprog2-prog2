
let pagina =1;
const botonSiguente= document.getElementById("siguiente");
const botonAnterior= document.getElementById("anterior");
const peliSeleccionada = document.getElementById('pelicula-seleccionada1')


botonSiguente.addEventListener('click',()=>{
    if(pagina< 1000){
        pagina+=1;
        cargarPeliculas();
    }
})

botonAnterior.addEventListener('click',()=>{
    if(pagina >1){
        pagina-=1;
        cargarPeliculas();
    }
})


const cargarPeliculas= async () =>{
    Response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb4bdb96c0a34109aaa056232d3c1986&language='es'&page=${pagina}`);
    Data = await Response.json();
        let mov='';
        Data.results.forEach(movie => {
            mov+=`<div class="pelicula">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">

            <button class="btn_pelicula"  onclick="getPelicula(${movie.id})"> Ver Pelicula  <i class="far fa-play-circle"></i> </button>
            </div>
            `;

            console.log(Data)
        });
        document.getElementById("contenedor").innerHTML=mov;
    }

cargarPeliculas();

async function getPelicula(id){
response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eb4bdb96c0a34109aaa056232d3c1986`)
console.log(response)
datos = await response.json()
console.log(datos);
dataLocal=localStorage.setItem("datos", JSON.stringify(datos))
    window.location.href("http://127.0.0.1:5500/movie.html")
}

async function prueba(){
    response = await fetch('http://127.0.0.1:5000/api')
    console.log(respnse)
}

