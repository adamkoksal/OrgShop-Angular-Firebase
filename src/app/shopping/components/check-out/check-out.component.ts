import { Component, OnInit, OnDestroy } from "@angular/core";
import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import { ShoppingCart } from "../../../shared/models/shopping-cart";
import { Subscription } from "rxjs";
import { OrderService } from "../../../shared/services/order.service";
import { AuthService } from "../../../shared/services/auth.service";
import { Order } from "../../../shared/models/order";
import { Router } from "@angular/router";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping: any = {};
  cart: ShoppingCart;
  subscription: Subscription;
  subscription2: Subscription;
  userId: string;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.subscription = cart$.subscribe((cart) => (this.cart = cart));
    this.subscription2 = this.authService.user$.subscribe(
      (user) => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(["/order-success", result.key]);
  }
}
