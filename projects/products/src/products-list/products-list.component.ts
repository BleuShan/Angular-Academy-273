import {Component, Input} from '@angular/core'
import {Product} from '../store/state'

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() products: Iterable<Readonly<Product>> | null = null
}
