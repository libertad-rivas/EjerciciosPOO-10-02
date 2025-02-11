"use strict";
/* 1. Genera una rama en tu repositorio que compartiste anteriormente con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una papelería que permita realizar operaciones de venta, consultar el inventario y gestionar productos.
3. Debes de tener al menos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de aumento, resta, consulta en el número de productos.
4. Procura que tu código tenga calidad.
5. Coloca como forma de comentarios en tus clases el por qué las creaste.
 */
// La clase inventario servirá para almacenar los métodos de agregar, eliminar y consultar productos
class Inventario {
    constructor(productos = []) {
        this.productos = [];
        this.productos = productos;
    }
    encontrarProdId(idProducto) {
        return this.productos.find(p => p._idProducto === idProducto);
    }
    agregarProducto(idProducto, nombre, cantidad, precio) {
        let producto = this.encontrarProdId(idProducto);
        if (producto) {
            producto._cantidad += cantidad;
        }
        else {
            this.productos.push({
                _idProducto: idProducto,
                _nombre: nombre,
                _precio: precio,
                _cantidad: cantidad
            });
        }
    }
    eliminarProducto(idProducto, cantidad) {
        let producto = this.encontrarProdId(idProducto);
        if (producto) {
            if (producto._cantidad >= cantidad) {
                producto._cantidad -= cantidad;
                console.log(`Se vendieron ${cantidad} ${producto}`);
            }
            else {
                console.log(`No hay suficientes ${producto}, quedan ${cantidad}`);
            }
        }
        else {
            console.log(`Producto no encontrado`);
        }
    }
    consultarInventario() {
        console.log(this.productos);
    }
}
// La clase venta servirá para gestinar las ventas de los productos e interactuar con la eliminación de los productos al venderlos
class Venta {
    constructor(idProducto, cantidad, totalVenta, fecha) {
        this._idProducto = idProducto;
        this._cantidad = cantidad;
        this._totalVenta = totalVenta;
        this._fecha = fecha;
    }
    // estático para poder hacer la venta desde afuera
    static realizarVenta(inventario, idProducto, cantidad) {
        let producto = inventario.encontrarProdId(idProducto);
        if (producto) {
            let totalVenta = producto._precio * cantidad;
            console.log(`Venta terminadA: ${cantidad} ${producto._nombre}(s) por $${totalVenta}`);
            inventario.eliminarProducto(idProducto, cantidad);
        }
        else {
            console.log(`Producto no encontrado`);
        }
    }
}
// Usando el sistema
const inventario = new Inventario();
inventario.agregarProducto(1, "calculadora", 150, 80);
inventario.agregarProducto(2, "plumones", 200, 30);
inventario.agregarProducto(3, "cartulina", 300, 7);
inventario.agregarProducto(4, "mapamundi", 300, 1);
inventario.agregarProducto(5, "tijeras", 200, 30);
inventario.consultarInventario();
Venta.realizarVenta(inventario, 1, 2); // 2 calculadoras
Venta.realizarVenta(inventario, 2, 6); // 6 plumones
Venta.realizarVenta(inventario, 3, 5); // 5 cartulinas
Venta.realizarVenta(inventario, 4, 3); // 3 mapamundis
Venta.realizarVenta(inventario, 5, 2); // 2 tijeras
inventario.consultarInventario();
