
class Carrito{

    comprarLenguaje(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const lenguaje = e.target.parentElement.parentElement;
            this.lenguajeDatos(lenguaje);
            //console.log(lenguaje);
        }
    }

    lenguajeDatos(lenguaje) {

        const infoLenguaje={

            image: lenguaje.querySelector('img').src,
            title: lenguaje.querySelector('h4').textContent,
            precio: lenguaje.querySelector('.precio span').textContent,
            id : lenguaje.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        this.insertarLenguaje(infoLenguaje);
    }

    insertarLenguaje(lenguaje) {
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src = '${lenguaje.image}' width=100>
        </td>
        <td>${lenguaje.title}</td>
        <td>${lenguaje.precio}</td>
        <td>
           ${lenguaje.cantidad}
        </td>
        `; 
        listaleguaje.appendChild(row);
           
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaleguaje.firstChild){
            listaleguaje.removeChild(listaleguaje.firstChild);
        }
        
        return false;
    }

    
}












