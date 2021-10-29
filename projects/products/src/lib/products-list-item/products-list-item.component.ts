import {Component, Input} from '@angular/core'
import {Product} from '../store/state'

@Component({
  selector: 'products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent {
  @Input() product: Readonly<Product> | null = null
}
