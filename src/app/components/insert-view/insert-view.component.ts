import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-input',
  templateUrl: './insert-view.component.html',
  styleUrls: ['./insert-view.component.scss']
})
export class InsertViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
  }

}
