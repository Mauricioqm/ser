import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  constructor(
    private api: ApiService,
    private cs: CartService
  ) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    this.api.getProducts().subscribe(products =>{
      this.productList = products;
      console.log(products);
      

      this.productList.forEach((p:any) => {
        Object.assign(p,{quantity:1,total:p.price});
      });
    })
  }

  addtocart(item: any){
    this.cs.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
