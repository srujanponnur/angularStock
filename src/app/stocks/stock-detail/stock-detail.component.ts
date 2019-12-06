import { Component, OnInit , OnDestroy } from '@angular/core';
import { Stock } from '../stock.model';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { StockService } from '../stocks.service';
import {NgForm } from '@angular/forms';
// import { Cart } from '/shared/cart.model;
import {DateModel } from '../../shared/date.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PriceHistorySerivce } from '../price-history.service';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css'],
  providers:[DatePipe]
})
export class StockDetailComponent implements OnInit{
 stock: Stock;
 id : number ;
 amount :number;
 price : number;
 public dsubscription:Subscription;
 prices : DateModel[];
 public minDate: Date = new Date ("05/07/2009");
 public maxDate: Date = new Date ("08/27/2020");
 public value: Date = new Date ();
pastPrice : DateModel[];
 open = false;

  constructor(private stockservice : StockService,private dsService :DataStorageService,
    private route : ActivatedRoute ,private psHistory : PriceHistorySerivce,private datepipe : DatePipe) {

    }

  ngOnInit() {

    this.route.params.subscribe(
      (params : Params)=>{
        this.id= +params['id'];
        this.stock=this.stockservice.getStock(this.id);
      }
    )

this.dsService.ondummyPastWeek(this.stock.symbol).subscribe(res => (console.log(res)));

};



  

  change(){
    this.open = !this.open;
  }


  onSubmit(form : NgForm){
    this.amount=form.value.amount;
  }

  onBuyStockOneTime(){
    this.price =this.stock.price;
    // const CartItem = new Cart(this.stock.name,this.amount,new Date(),'oneTime',);
    this.stockservice.addStocksBoughtToCart(this.stock,this.amount,this.price);
  }

  onBuyStockRecur(){
    interval(1000 * 60).subscribe(x => {
      this.onBuyStockOneTime();
    });
  }

  onCurrentDay(){
    this.dsService.onClickCurrentDay(this.stock.symbol);
  }

  onCurrentWeek(){
    this.dsService.onClickCurrentWeek(this.stock.symbol);
  }

  onPastWeek(){
    this.dsService.onClickpastWeek(this.stock.symbol);
  }

  MonthTodate(){
    let date= this.datepipe.transform(new Date(this.value), 'yyyy-MM-dd');
    console.log(date);
// this.dsService.OnclickMonthTodate(this.value,this.stock.symbol);
  }

  YearTodate(){
this.dsService.OnClickYearTodate(this.value);
  }

  onPast5years(){
this.dsService.onClickPast5years(this.value);
  }


  onValueChange(args: any):void {
    /*Displays selected date in the label*/
    this.value =  new Date(args.value.toLocaleDateString());
}


  display(){
    this. prices=this.psHistory.getDates();
    this.dsubscription=this.psHistory.pricesListChanged.subscribe(
      (values: DateModel[])=>
      {
        this.prices = values;
      }
    )
    // this.subscription.unsubscribe();
  }





}
