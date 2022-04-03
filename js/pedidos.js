const carro = new Carrito;
const carrito = document.getElementById('carrito');
const lenguaje =document.getElementById('lista-cursos')
const listaleguaje = document.querySelector('#lista-carrito tbody');
const vaciarCarrito= document.getElementById('vaciar-carrito');

Eventos();

function Eventos(){
    
    lenguaje.addEventListener('click',(e)=>{carro.comprarLenguaje(e)});
    vaciarCarrito.addEventListener('click',(e)=>{carrito.vaciarCarrito(e)});
}
