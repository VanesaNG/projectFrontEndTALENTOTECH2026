import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";



const renderizarCarrito = () => {

    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const accionesCarrito = document.getElementById("acciones-carrito");

    contenedorCarrito.innerHTML = "";
    accionesCarrito.innerHTML = "";

    if(!carrito.length){

        const mensaje = document.createElement("p");
        mensaje.textContent = "Carrito vacíoo !!";

        contenedorCarrito.appendChild(mensaje);

        return;
    }

    carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const imagen = document.createElement("img");
        imagen.src = `../${producto.img}`
        imagen.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.textContent = "Eliminar producto";

        botonEliminar.addEventListener("click", ()=> {
            eliminarProducto(indice);
            renderizarCarrito();
        });

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta. appendChild(precio);
        tarjeta.appendChild(botonEliminar);

        contenedorCarrito.appendChild(tarjeta);

    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("btn");
    botonVaciar.textContent = "Vaciar carrito";

    botonVaciar.addEventListener("click", ()=> {
        vaciarCarrito();
        renderizarCarrito();
    });

    accionesCarrito.appendChild(botonVaciar);

}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});