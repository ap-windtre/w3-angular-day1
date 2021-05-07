import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductItem } from '../../models/product';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  products!: Array<ProductItem>;
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {}
}
