import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  selectedProducto: Producto;
  productos: Producto[];
  readonly URL_API = "http://localhost:3000/api/producto";

  constructor(private http: HttpClient) {
    this.selectedProducto = new Producto();
  }

  postProducto(producto: Producto) {
    return this.http.post(this.URL_API, producto);
  }

  getProductos() {
    return this.http.get<Producto[]>(this.URL_API);
  }

  putProducto(producto: Producto) {
    return this.http.put(this.URL_API + `/${producto._id}`, producto);
  }

  deleteProducto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
