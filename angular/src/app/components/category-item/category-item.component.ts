import { Category } from '@/mocks/categories';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {

  @Input() category!: Category;

  isOpen: boolean = true

}
