import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FooterComponent } from './compartida/footer/footer.component';
import { ProductosComponent } from './compartida/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CarritoComponent } from './compra/carrito/carrito.component';
import { DireccionComponent } from './compra/direccion/direccion.component';
import { PagoComponent } from './compra/pago/pago.component';
import { ResumencompraComponent } from './compra/resumencompra/resumencompra.component';
import { DetalleComponent } from './detalle/detalle.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login//register/register.component';
//referencias a los componentes
const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'carro', component: CarritoComponent},
    {path: 'direccion', component: DireccionComponent},
    {path: 'pago', component: PagoComponent},
    {path: 'resumencompra', component: ResumencompraComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: 'todos_productos', component: ProductosComponent},
    {path: '**', component: NotfoundComponent},

    // {path: '/nombre_ruta', component: El componente},
    
];

// decorador: no olvidar importar
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }
