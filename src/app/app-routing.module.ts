import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent} from './componentes/categorias/categorias.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'acercade', component: AcercadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
