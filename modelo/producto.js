module.exports=class Producto {
    constructor(descripcion, precio) {
      this.descripcion = descripcion;
      this.precio = precio;

    }
    getprecio() {
        return this.precio;
      }
      
      setprecio(p) {
        this.precio=p;
      }
      getdescripcion() {
        return this.descripcion;
      }
      
      setdescripcion(p) {
        this.descripcion=p;
      }
  }
  