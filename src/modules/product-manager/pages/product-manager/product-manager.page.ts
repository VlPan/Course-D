import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from './../../models';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ProductsState } from './../../store/reducers/product.reducer';
import { getAllProducts } from './../../store/selectors/products.selectors';
import { LoadProducts } from '../../store/actions/products.action';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.page.html',
  styleUrls: ['./product-manager.page.scss'],
  encapsulation: 2
})
export class ProductManagerPage implements OnInit, AfterViewInit {

  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) {}

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.select(getAllProducts);
  }

  ngAfterViewInit(): void {
    this.products$.subscribe( (products: Product[]) => {
      this.dataSource.data = products;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  } );
  }
}
