import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminAuthGuardService } from "../admin/services/admin-auth-guard.service";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { UserService } from "./services/user.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProductQuantityComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductQuantityComponent, ProductCardComponent, ],
  providers: [
    AuthService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
})
export class SharedModule {}
