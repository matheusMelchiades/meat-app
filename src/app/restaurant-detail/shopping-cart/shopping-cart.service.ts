import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { NotificationService } from "app/shared/messages/snackbar/notification.service";


@Injectable()
export class ShooppingCartService {
    items: CartItem[] = [] 

    constructor(private notificationService: NotificationService) {}

    clear() {
        this.items = []
    }

    additem(item: MenuItem) {
        let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id )

        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }

        this.notificationService.notify(`Voce adicionou o item ${item.name}`)
    }

    increaseQty(item: CartItem) {
        item.quantity++
    }

    decreaseQty(item: CartItem) {
        item.quantity--

        if (item.quantity === 0 ) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Voce removeu o item ${item.menuItem.name}`)
    }

    total():number {
        return this.items
            .map(i => i.value())
            .reduce((prev, value) => prev + value, 0)
    }
}