import { Component, OnInit, SimpleChanges, Input, ViewChild, } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: Observable<any[]>;
  @Input() columns: any[];
  @Input() filterValue = '';

  dataSource: any;
  displayedColumn: any[];

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    this.data.subscribe(val => {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.sort = this.sort;
      this.applyFilter(this.filterValue);
    });
    this.displayedColumn = this.columns.map(label => label.key);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource &&
    this.applyFilter(changes.filterValue.currentValue);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}