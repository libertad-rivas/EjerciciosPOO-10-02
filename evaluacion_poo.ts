
// crearé unainterfaz "Producto" para definir el tipo de elementos del array productos que haré más adelante, de esta forma puedo definir todos los atributos que debe tener un producto 
interface Producto {
    _idProducto: number;
    _nombre: string;
    _precio: number;
    _cantidad: number;
}


// La clase inventario servirá para almacenar los métodos de agregar, eliminar y consultar productos, y uno extra que será "encontrarPorId" que me servirá para usarlos en los primeros métodos mencionados. La clase tendrá un contructor para inicializar productos como un array

class Inventario{
    private productos: Producto[]=[];

    constructor(productos:Producto[]=[]){
        this.productos = productos;
    }

    public encontrarProdId(idProducto:number):Producto|undefined{
        return this.productos.find(p=>p._idProducto === idProducto)
    }

    public agregarProducto(idProducto: number, nombre:string, cantidad: number, precio:number): void {
        let producto = this.encontrarProdId(idProducto);
        
        if (producto){
            producto._cantidad += cantidad;
        } else {
            this.productos.push({
                _idProducto: idProducto,
                _nombre:nombre,
                _precio:precio, 
                _cantidad: cantidad
            });
        }
    
    }

    public eliminarProducto(idProducto:number, cantidad:number):void{
        let producto = this.encontrarProdId(idProducto);
        
        if (producto){
            if (producto._cantidad >=cantidad){
                producto._cantidad -= cantidad;
                console.log(`Se vendieron ${cantidad} ${producto}`);
            }else{
                console.log(`No hay suficientes ${producto}, quedan ${cantidad}`);
            }
        } else{
            console.log(`Producto no encontrado`);
        }
    }

    public consultarInventario():void{
        console.log(this.productos);
    }
}

// La clase venta servirá para gestinar las ventas de los productos e interactuar con la eliminación de los productos al venderlos, creo que no es necesario el constructor pero aún no me queda claro ese tema. Tiene un método estático para acceder a él sin crear un objeto y realizar las ventas
class Venta {
    _idProducto: number;
    _cantidad: number;
    _totalVenta: number;
    _fecha: string;

    constructor(idProducto: number, cantidad: number, totalVenta: number, fecha: string) {
        this._idProducto = idProducto;
        this._cantidad = cantidad;
        this._totalVenta = totalVenta;
        this._fecha = fecha;
    }
    
    // estático para poder hacer la venta desde afuera
    public static realizarVenta(inventario:Inventario, idProducto:number, cantidad:number):void{
        let producto = inventario.encontrarProdId(idProducto);

        if (producto){
            let totalVenta = producto._precio * cantidad;
            console.log(`Venta terminadA: ${cantidad} ${producto._nombre}(s) por $${totalVenta}`);
            inventario.eliminarProducto(idProducto,cantidad);
            

        } else {
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