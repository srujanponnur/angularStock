import {Cart} from '../shared/cart.model';
import { Subject } from 'rxjs';


export class SellCartService{

  private sellList : Cart[]= [];
  sellListChanged= new Subject<Cart[]>();

  setList(list : Cart[]){
    this.sellList.push(...list);
    this.sellListChanged.next(this.sellList.slice());
  }

  getList(){
    return this.sellList.slice();
  }

}
