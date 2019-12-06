import { Component, OnInit,OnDestroy } from '@angular/core';
import { Stock } from '../stock.model';
import {StockService} from '../stocks.service';
import { Subscription } from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})

export class StockListComponent implements OnInit {

stocks : Stock[]=[];
private subscription:Subscription;
filterCompanyName='';
  constructor(private stockservice : StockService,private dsService : DataStorageService) {
  
  }

  ngOnInit() {

    this.stocks = this.stockservice.getStocks();
    this.subscription=this.stockservice.stockListChanged.subscribe(
      (stocksList : Stock[])=>
      {
        console.log(stocksList);
        this.stocks = stocksList;
      }
      
    );

// this.dsService.getCacheList().subscribe(res => {
  
//   }
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  
}
