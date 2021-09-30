import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumencompra',
  templateUrl: './resumencompra.component.html',
  styleUrls: ['./resumencompra.component.css']
})
export class ResumencompraComponent implements OnInit {
  total_compra: number = 0;

  constructor(public productoService: ProductoService, private router: Router) { 
    
    for (let producto in productoService.carro_compras){
      // this.total_compra = this.total_compra + producto.precio

      console.log(producto)

    }
  }

  ngOnInit(): void {
    
  }

  vaciarcarro(){
    this.productoService.carro_compras = []
  }

}
