import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AngularFirestore } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { environment } from "src/environments/environment";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { UserService } from "./user.service";
import { AdminAuthGuardService } from "./admin-auth-guard.service";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { CategoryService } from "./category.service";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./product.service";
import { CustomFormsModule } from "ng2-validation";

import { ProductFilterComponent } from "./products/product-filter/product-filter.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ShoppingCartService } from "./shopping-cart.service";
import { ProductQuantityComponent } from "./product-quantity/product-quantity.component";
import { OrderService } from "./order.service";
import { ShoppingCartSummaryComponent } from "./shopping-cart-summary/shopping-cart-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    RouterModule.forRoot([
      { path: "", component: ProductsComponent, pathMatch: 'full' },
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "login", component: LoginComponent },

      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuardService], pathMatch: 'full'
      },
      {
        path: "my-orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: "admin/products/new",
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
    ]),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AngularFirestore,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
