import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ShoppingCartSummaryComponent } from "./components/shopping-cart-summary/shopping-cart-summary.component";
import { ProductFilterComponent } from "./components/products/product-filter/product-filter.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },

      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuardService],
        pathMatch: "full",
      },
      {
        path: "my-orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],
})
export class ShoppingModule {}
