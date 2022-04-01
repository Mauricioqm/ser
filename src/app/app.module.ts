import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListadoComponent } from './components/listado/listado.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

//Ruteo
const AppRoutes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'carrito', component: CartComponent},
  {path: 'dataProductos', component: ListadoComponent},
  {path: 'editarProductos/:id', component: EditarProductoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductosComponent,
    ListadoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot( AppRoutes ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
