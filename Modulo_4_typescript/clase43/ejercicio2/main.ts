import { Producto, Categoria } from "./producto";
const inventario: Producto[] = [
    new Producto("Maíz",20,Categoria.Alimentos),
]
function agregarProducto(nombre: string, precio: number,categoria: Categoria):void{
    const crearProducto = new Producto(nombre,precio,categoria);
    inventario.push(crearProducto);
}
function mostratPorCategoria(inventario: Producto[]):void{
    inventario.forEach(producto =>{
        if(producto.categoria === Categoria.Alimentos){
            console.log(producto);
        }
    })
}

agregarProducto("Blusa",200,Categoria.Ropa);
console.log(inventario);

mostratPorCategoria(inventario)
