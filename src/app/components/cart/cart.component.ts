import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(
    private cs: CartService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.cs.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(res);
      
      this.grandTotal = this.cs.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cs.removeCartItem(item);
  }

  emptycart(){
    this.cs.removeAllCart();
  }
}
