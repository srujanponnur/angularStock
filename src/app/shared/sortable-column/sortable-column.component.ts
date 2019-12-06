import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SortService } from './sort-column.service';

@Component({
    selector: '[sortable-column]',
    templateUrl: './sortable-column.component.html'
})
export class SortableColumnComponent implements OnInit, OnDestroy {

    constructor(private sortService : SortService) { }

    private columnSortedSubscription: Subscription;

    @Input('sortable-column')
    columnName: string;

    @Input('sort-direction')
    sortDirection: string = '';

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    }

    ngOnInit() {
      this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
        // reset this column's sort direction to hide the sort icons
        if (this.columnName != event.sortColumn) {
            this.sortDirection = '';
        }
    });
     }

     ngOnDestroy() {
      this.columnSortedSubscription.unsubscribe();
  }
}
