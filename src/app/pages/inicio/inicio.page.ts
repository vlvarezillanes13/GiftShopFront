import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { IProducto } from '../../interfaces/producto.interface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  productos: IProducto[] = [];
  constructor(  private productosService: ProductosService ) { }

  ngOnInit() {
    this.productosService.obtenerProductos()
      .subscribe( (productos) => this.productos = productos);
  }
}
