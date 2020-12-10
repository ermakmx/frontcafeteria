export class Producto {
    constructor(_id = "", nombre = "", precioUni = 0, categoria = "", usuario = "") {
      this._id = _id;
      this.nombre = nombre;
      this.precioUni = precioUni;
      this.categoria = categoria;
      this.usuario = usuario;
    }
  
    _id: string;
    nombre: string;
    precioUni: Number;
    categoria: string;
    usuario: string;
  }
  