export class Cart {

  // public id: number;
  public symbol:string;
  public quantity : number;
  public price : number;
  public selected : boolean=false;

  constructor(
    name:string,
    amount : number,
    price : number

    ){

    // this.id=id;
    this.symbol=name;
    this.quantity=amount;
    this.price=price;
    // this.selected=selected;
  }
}
