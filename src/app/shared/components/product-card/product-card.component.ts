import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { ShoppingCart } from "../../models/shopping-cart";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent implements OnInit {
  @Input("product") product: Product;
  @Input("show-actions") showActions = true;
  shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    await this.shoppingCartService.getCart().then((cart) => {
      cart.subscribe((c) => (this.shoppingCart = c));
    });
  }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
}
