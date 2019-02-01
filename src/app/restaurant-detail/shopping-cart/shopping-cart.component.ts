import { Component, OnInit } from '@angular/core';
import { ShooppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShooppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear()
  }

  addItem(item) {
    this.shoppingCartService.additem(item)
  }

  removeItem(item) {
    this.shoppingCartService.removeItem(item)
  }

}
