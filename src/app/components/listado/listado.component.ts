import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public productList : any ;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getProducts().subscribe(products =>{
      this.productList = products;
    })
  }

  delete(item: any) {
    this.api.deleteProducts(item.id);
  }

}
