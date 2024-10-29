const elementosCocina = [

  {
    id: 1,
    contador: 0,
    nombre: "Sartén Antiadherente",
    precio: 25.99,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s"
  },
  {
    id: 2,
    contador: 0,
    nombre: "Cuchillo Chef",
    precio: 18.50,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s"
  },
  {
    id: 3,
    contador: 0,
    nombre: "Tabla de Cortar",
    precio: 12.75,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s"
  },
  {
    id: 4,
    contador: 0,
    nombre: "Olla de Acero inx",
    precio: 35.00,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s"
  },
  {
    id: 5,
    contador: 0,
    nombre: "Batidora de Mano",
    precio: 29.99,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s"
  },
  {
    id: 6,
    contador: 0,
    nombre: "Tetera Eléctrica",
    precio: 22.50,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s"
  }
];

let productos = document.getElementById("productos")

for (let index = 0; index < elementosCocina.length; index++) {
  const element = elementosCocina[index];

  productos.innerHTML += `                        
  <div class="card tarjeta col-3" style="width: 16rem;">
          <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
          <div class="card-body">
              <h5 class="card-title">${element.nombre}</h5>
              <p class="card-text"></p>
              <div class="d-flex justify-content-center py-0">
                  <p class="comprar btn btn-primary py-0 mt-4">$ ${element.precio}</p>
              </div>
              <div class="d-flex justify-content-center ">
                  <i type="button" id=""class=" restar botones fa-solid fa-arrow-left me-2"></i>
                  <p id ="cantidad" class="fw-bold fs-3 cantidad mb-0">${element.contador}</p>
                  <i type="button" id="incrementar" class=" incrementar fa-solid fa-arrow-right ms-2"></i>
              </div>
          </div>
      </div>` 
  
}
let TotalaPgar= document.getElementById ("TotalaPgar")
let ahorro = document.getElementById ("ahorro")
let subtotal = document.getElementById ("subtotal")
let incrementar = document.getElementsByClassName ("incrementar")
let restar = document.getElementsByClassName ("restar")
let cantidad = document.getElementsByClassName ("cantidad")
let productosCantidad = document.getElementById ("productosCantidad")
let productosCarrito = []
let sumaSubtotal = 0
let ahorroTotal = 0
let totalaPagar = 0 

for (let index = 0; index < incrementar.length; index++) {
  const element = incrementar[index];
  element.addEventListener ("click", () =>{
    // aumentar el contador
    elementosCocina[index].contador += 1
    cantidad[index].innerText =  elementosCocina[index].contador    
    // aumentar cantidad de en carrito
    productosCarrito.push(elementosCocina[index])
    productosCantidad.innerText = productosCarrito.length
    // Suma subtotal 
    sumaSubtotal += elementosCocina[index].precio
    subtotal.innerText = sumaSubtotal
    // ahorro productos
    if (productosCarrito.length > 5) {
      ahorroTotal += 5
      ahorro.innerText = ahorroTotal
    }
    // total a pagar 
    totalaPagar = sumaSubtotal - ahorroTotal
    TotalaPgar.innerText = totalaPagar
  })
}
for (let index = 0; index < restar.length; index++) {
  const element = restar[index];
  element.addEventListener ("click", () => {
    // disminuir el contador
  if (elementosCocina[index].contador > 0){
    elementosCocina[index].contador -= 1
    cantidad[index].innerText = elementosCocina[index].contador
    // disminuir cantidad de en carrito
    productosCarrito.pop(elementosCocina[index])
    productosCantidad.innerText = productosCarrito.length
    // resta subtotal 
    sumaSubtotal -= elementosCocina[index].precio
    subtotal.innerText = sumaSubtotal
     // restar productos
     if (productosCarrito.length < 6) {
      ahorroTotal -= 5
      ahorro.innerText = ahorroTotal
    }
  }
  })
  
}

// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorro" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "total a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"


