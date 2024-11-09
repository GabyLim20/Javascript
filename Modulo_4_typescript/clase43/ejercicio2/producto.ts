export enum Categoria {
    Electronica,
    Ropa,
    Alimentos
}
export class Producto{
    nombre: string;
    precio: number;
    categoria: Categoria;
    
    constructor(nombre: string, precio: number,categoria: Categoria){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio
    }
    mostrarProducto(): void {
        console.log(`Producto: ${this.nombre}, Categoría: ${Categoria[this.categoria]}, Precio: $${this.precio}`);
    }
    obtenerSalarioAnual():number{
        return this.precio + this.precio
    }
}