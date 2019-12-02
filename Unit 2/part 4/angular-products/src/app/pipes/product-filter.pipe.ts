import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: IProduct[], filterBy: string): IProduct[] {
    if (filterBy) {
      return products.filter(p =>
        p.description.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase())
      );
    } else {
      return products;
    }
  }
}
