import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Summary} from '../summary/summary.model';
import { SummaryService } from './summary.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { MatSort , MatSortable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @ViewChild(MatSort,{static: false}) sort : MatSort;
list : Summary[];
dataSource;
displayedColumns =['Symbol','Quantity','price','date'];
private subscription : Subscription;

  constructor(private dsService : DataStorageService,private summarysertvice: SummaryService) {
    this.list = this.summarysertvice.getSummary();
    this.subscription = this.summarysertvice.summaryListChanged.subscribe(
      (summaryList : Summary[])=>
      {
        this.list = summaryList;
      })

    // // console.log(this.list);
    // // this.dataSource= new MatTableDataSource(this.list);
    // // this.dataSource= this.sort;
  }

  ngOnInit() {
this.dsService.onSummary();
  }

}

