const buscar = document.querySelector('#searchicon');
const lupa = document.querySelector('#lupa');
const BarraBusqueda = document.querySelector ('#sb')

buscar.addEventListener('focus', esta);
buscar.addEventListener('blur' , noesta)

function esta(){
    lupa.classList.remove('hidden');
    BarraBusqueda.classList.add('focus');
}

function noesta(){
    lupa.classList.add('hidden');
    BarraBusqueda.classList.remove('focus')
}