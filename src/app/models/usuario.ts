export class Usuario {
    constructor(_id = "", nombre = "", email = "", password = "", role = "") {
      this._id = _id;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.role = role;
    }
  
    _id: string;
    nombre: string;
    email: string;
    password: string;
    role: string;
  }
  