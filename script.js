let iconoCarrito = document.querySelector(".carritoIcono");
let iconoCierre = document.querySelector("#cerrarCarito");

let todoElCarrito = document.querySelector(".carrito");

let articuloEnCarrito = document.querySelector(".cart-box")
let btnAñadirCarrito = document.querySelectorAll(".añadirCarrito");

let contenedorProducto = document.querySelector(".contendorProductos");

let precioTotal = document.querySelector(".precioTotal");

let btncomprar = document.querySelector(".btnComprar");

let div = document.createElement("div");

let ctendorTotal = document.querySelector(".total");

function vaciarCarrito() {
    todoElCarrito.style.display = "none"
}

function agregarProducto(productoElegido) {
    div.classList.add("cart-box");
    contenedorProducto.appendChild(div)


    let imagenNueva = document.createElement("img")
    imagenNueva.classList.add("img-cart")
    imagenNueva.src = `${productoElegido.src}`


    let tituloNuevo = document.createElement("h2")
    tituloNuevo.classList.add("carritoProducto");
    tituloNuevo.textContent = `${productoElegido.nombre}`

    let precioNuevo = document.createElement("p");
    precioNuevo.classList.add("precioCarrito")
    precioNuevo.textContent = `$${productoElegido.precio}`


    div.appendChild(imagenNueva)
    div.appendChild(tituloNuevo)
    div.appendChild(precioNuevo)

    compre.push({
        nombre: `${productoElegido.nombre}`,
        precio: parseInt(`${productoElegido.precio}`)
    })
}


document.addEventListener("DOMContentLoaded", function () {
    vaciarCarrito();
});

iconoCierre.addEventListener("click", function () {
    todoElCarrito.style.display = "none";
})
iconoCarrito.addEventListener("click", function () {
    todoElCarrito.style.display = "block"
})

document.addEventListener("DOMContentLoaded", function () {
    vaciarCarrito()
})

document.addEventListener("DOMContentLoaded", function () {
    articuloEnCarrito.style.display = "none";
})




let productosZapatillas = [
    {
        src: "./assets/imagenes/zapatillaUno.jpg",
        nombre: "zapatillas adidas",
        precio: 30000,
    },
    {
        src: "./assets/imagenes/zapatillaDos.jpg",
        nombre: "Zapatillas Nike",
        precio: 20000,
    },
    {
        src: "./assets/imagenes/zapatillaTres.jpg",
        nombre: "Zapatillas Puma",
        precio: 54030,
    },
    {
        src: "./assets/imagenes/zapatillaCuatro.jpg",
        nombre: "Zapatillas Creativas",
        precio: 23456,
    },
    {
        src: "./assets/imagenes/zapatillaCinco.jpeg",
        nombre: "Zapatillas Malala",
        precio: 64000,
    },
    {
        src: "./assets/imagenes/zapatillaSeis.jpg",
        nombre: "Zapatillas Multicolor",
        precio: 10000,
    }
]

let compre = [];
let objetosstringify = JSON.stringify(productosZapatillas);
localStorage.setItem("productos", objetosstringify)

let parse = JSON.parse(localStorage.getItem("productos"));
console.log(parse)

btnAñadirCarrito.forEach(boton => {
    boton.addEventListener("click", function () {
        let indice = parseInt(boton.dataset.indice, 6);;
        agregarProducto(productosZapatillas[indice]);
        let acomulardor = compre.reduce((prev, valor) => {
            return prev + valor.precio
        }, 0)
        precioTotal.textContent = `$${acomulardor}`
    })
});


btncomprar.addEventListener("click", function () {
    let tituloCarrito = document.querySelector(".tuCarrito");
    tituloCarrito.style.display = "none";
    div.style.display = "none"
    ctendorTotal.style.display = "none"
    btncomprar.style.display = "none"
    let NuevoTexto = document.createElement("p");
    todoElCarrito.appendChild(NuevoTexto)
    NuevoTexto.textContent = "Gracias por comprar con nosotros"
})
