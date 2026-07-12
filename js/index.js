import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";



const renderizarProductos= () => {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

    fetch("./data/productos.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta-producto");

            const imagen = document.createElement("img");
            imagen.src = `./${producto.img}`
            imagen.alt = producto.nombre;

            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const descripcion = document.createElement("p");
            descripcion.textContent = producto.descripcion;

            const precio = document.createElement("p");
            precio.textContent = `$${producto.precio}`;

            const boton = document.createElement("button");
            boton.classList.add("btn");
            boton.textContent = "Agregar al carrito";

            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(descripcion);
            tarjeta. appendChild(precio);
            tarjeta.appendChild(boton);

            contenedorTarjetas.appendChild(tarjeta);


        })
        }).catch((error) => console.log(error));

}

    document.addEventListener("DOMContentLoaded", () =>{
        const carrito = obtenerCarrito();
        actualizarContador(carrito);
        renderizarProductos();
    })