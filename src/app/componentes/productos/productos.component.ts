import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { NgForm } from "@angular/forms";
import { Producto } from "../../models/producto";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit {

  constructor( public productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  addProducto(form?: NgForm) {
    if (form.value._id) {
      this.productoService.putProducto(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getProductos();
      });
    } else {
      this.productoService.postProducto(form.value).subscribe((res) => {
        this.getProductos();
        this.resetForm(form);
      });
    }
  }

  getProductos() {
    this.productoService.getProductos().subscribe((res) => {
      this.productoService.productos = res;
    });
  }

  editProducto(producto: Producto) {
    this.productoService.selectedProducto = producto;
  }

  deleteProducto(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminarlo?")) {
      this.productoService.deleteProducto(_id).subscribe((res) => {
        this.getProductos();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }
}
