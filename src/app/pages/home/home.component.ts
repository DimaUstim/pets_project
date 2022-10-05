import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentProduct?: Product;
  responsiveOptions;
  displayBasic: boolean = false;

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  showBasicDialog(product: any) {
    this.currentProduct = product;
    this.displayBasic = true;
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }
}
