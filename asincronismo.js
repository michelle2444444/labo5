const url = 'https://www.amazon.com/s?k=dog+accessories&language=es_US&adgrpid=162652060509&hvadid=701056421897&hvdev=c&hvlocphy=9069516&hvnetw=g&hvqmt=b&hvrand=16383373608299580453&hvtargid=kwd-22043101&hydadcr=3157_13750763&tag=txscdpesrow-20&ref=pd_sl_4h2qq846r_b';

async function obtenerProductos() {
  try {
    const response = await fetch(url); 
    const html = await response.text(); 
    mostrarProductos(html);
    console.log(html);
  } catch (error) {
    console.error(error);
  }
}

function mostrarProductos(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  const productos = doc.querySelectorAll('.s-title'); 
  
  const lista = document.getElementById('lista-productos');
  
  productos.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = producto.innerText;
    lista.appendChild(li);
  });
}

obtenerProductos();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Menú");
});

app.get("/alimentos", (req, res) => {
  res.send("Alimentos");
});

app.get("/tecnologia", (req, res) => {
  res.send("Tecnología");
});

app.use((req, res) => {
  res.status(404).send("Page not found - 404");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
