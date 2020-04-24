import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  // products: Product[];
  products: any[];
  filteredProducts: any[];
  subsription: Subscription;
  items: Product[];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subsription = this.productService.getAll()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
      });
  }


  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

  ngOnInit() {
  }

}
