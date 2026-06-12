let movies=JSON.parse(localStorage.getItem('movies'))||[];
function saveMovies(){localStorage.setItem('movies',JSON.stringify(movies));}
function displayMovies(){
const container=document.getElementById('movieContainer');
container.innerHTML='';
movies.forEach((movie,index)=>{
container.innerHTML+=`<div class="card"><h3>${movie.name}</h3><p class="rating">${movie.rating}</p><button class="delete-btn" onclick="deleteMovie(${index})">Delete</button></div>`;
});
}
function addMovie(){
let name=document.getElementById('movieName').value;
let rating=document.getElementById('rating').value;
if(name.trim()===''){alert('Enter Movie Name');return;}
movies.push({name,rating});
saveMovies();displayMovies();
document.getElementById('movieName').value='';
}
function deleteMovie(index){movies.splice(index,1);saveMovies();displayMovies();}
displayMovies();