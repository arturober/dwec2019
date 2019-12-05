import { Component, OnInit, ViewChild, ContentChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { IProduct } from '../interfaces/i-product';
import { NgModel, NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanComponentDeactivate {
  product: IProduct;
  savedChanges = false;
  @ViewChild('productForm') productForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.product = this.route.snapshot.data.product;
    this.product.available = this.product.available.slice(0, 16);
  }


  canDeactivate(): boolean {
    if (this.savedChanges || this.productForm.pristine) { return true; }

    return confirm('Do you want to leave this page?. Changes can be lost');
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

  editProduct() {
    this.product.price = +this.product.price;
    this.productsService.updateProduct(this.product).subscribe(
      ok => {
        this.savedChanges = true;
        this.router.navigate(['/products', this.product.id]);
      },
      error => console.error(error)
    );
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }

    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.product.imageUrl = reader.result as string;
    });
  }
}
