import {Component, Input, OnInit} from '@angular/core'
import {Product} from '../store/state'

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {
  @Input() product!: Readonly<Product>
}
