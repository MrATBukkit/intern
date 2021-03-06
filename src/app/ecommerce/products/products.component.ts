import { Component } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
    selector: 'my-ecommerce-products',
    styles: [],
    templateUrl: './products.component.html',
    providers: [ProductService]
})

export class ECommerceProductsComponent {
    products;

    constructor(private productService: ProductService) {}

    getProducts(): void {
        this.products = this.productService.getProducts();
    }

    ngOnInit(): void {
        this.getProducts();
    }
}
