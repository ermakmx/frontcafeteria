export class Categoria {
    constructor(_id = "", nombre = "", usuario = "") {
      this._id = _id;
      this.nombre = nombre;
      this.usuario = usuario;
          }
  
    _id: string;
    nombre: string;
    usuario: string;
    
  }
  