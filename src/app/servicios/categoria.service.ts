import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Categoria } from "../models/categoria";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  selectedCategoria: Categoria;
  categorias: Categoria[];
  readonly URL_API = "http://localhost:3000/api/categoria";

  constructor(private http: HttpClient) {
    this.selectedCategoria = new Categoria();
  }

  postCategoria(categoria: Categoria) {
    return this.http.post(this.URL_API, categoria);
  }

  getCategorias() {
    return this.http.get<Categoria[]>(this.URL_API);
  }

  putCategoria(categoria: Categoria) {
    return this.http.put(this.URL_API + `/${categoria._id}`, categoria);
  }

  deleteCategoria(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
