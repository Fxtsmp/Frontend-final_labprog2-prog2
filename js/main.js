const movieContainer = document.getElementById("movie-container");


async function movieCharger(){
    let respones= await fetch('https://eduars.pythonanywhere.com/films');
    let data = await respones.json()
    console.log(data)
    films= data.films
    console.log(films)
    let pelicula= ''
    films.forEach( movie => {
        pelicula+=`
        <div class="movie-card">
    <img src="${movie.cover}" >
    <h2 class="title"> Titulo:${movie.title}</h2>
    <button class="select-movie" onclick="getMovie(${movie.title})">Ver Pelicula</button>
</div>
        `
        movieContainer.innerHTML=pelicula;
    })

}
movieCharger();

function getMovie(title){
    localStorage.setItem('name',title)
    window.location.assign('movie.html')
}




