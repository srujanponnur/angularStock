import { Cart } from '../shared/cart.model';
import { Stock } from '../stocks/stock.model';
import { Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { DataStorageService} from '../shared/data-storage.service';

// @Injectable()
export class ShoppingCartService {
  
  // constructor(private dsService : DataStorageService){

  // }


  cartListChanged= new Subject<Cart[]>();

  private cartList : Cart[]=[];

  private buyList : Cart[]=[

  ];

getListOfCart(){
  return this.cartList.slice();
}

addCartItem(stock : Stock,quantity : number,price : number){
  const cartItem = new Cart("srujan",stock.symbol,quantity,price);
  this.cartList.push(cartItem);
  this.cartListChanged.next(this.cartList.slice());

}

onEditItem( symbol : string , amount :number,price : number,index:number ){
  this.cartList[index].symbol=symbol;
  this.cartList[index].quantity=amount;
  this.cartList[index].price=price;
  this.cartListChanged.next(this.cartList.slice());
}

onDeleteItem(index:number){
this.cartList.splice(index,1);
this.cartListChanged.next(this.cartList.slice());
}


onSelectItem(index : number){
  if(this.cartList[index].selected===undefined )
  {
    this.cartList[index].selected==true;
  }
  else{
    this.cartList[index].selected=!this.cartList[index].selected;
  }
  console.log(this.cartList[index].selected);

}

addBuyItemtoList(){
for(const item of this.cartList){
  if(item.selected==true){
    this.buyList.push(item)
    }
  }
}

getBuyList(){
return this.buyList.slice();

}


}

