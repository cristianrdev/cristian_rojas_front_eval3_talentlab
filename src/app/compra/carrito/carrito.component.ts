import { Component, OnInit } from '@angular/core';
import {ProductosComponent} from 'src/app/compartida/productos/productos.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto.interface';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  total_compra: number = 0;


  

  constructor(public productoService: ProductoService) { 
    this.total_compra = 0;
    console.log("Producto",productoService.carro_compras[0])
    for (let producto in productoService.carro_compras[0]){
      this.total_compra = this.total_compra 
      console.log("lista",producto)

    }
  }


  eliminarcarro(item: any){
    this.productoService.eliminarCarro(item)

  }


  ngOnInit(): void {
    
  }

}
