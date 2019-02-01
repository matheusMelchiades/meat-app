import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";

import { ShooppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

import { Order } from "./order.model";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService {


    constructor(public cartService: ShooppingCartService, private http: Http) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    itemsValue() {
        return this.cartService.total()
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<Order> {
        const headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers })).map(response => response.json())
    }

    clear() {
        this.cartService.clear()
    }
}   