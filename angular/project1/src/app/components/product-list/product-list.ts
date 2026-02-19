import { Component } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { CharOnly } from "../../custom-directives/char-only";
import { Highlight } from '../../custom-directives/highlight';

@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule, NgxPaginationModule, CharOnly, Highlight],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;
  p = 1; //Represents current page
  openAlert() {
    Swal.fire('Page saved!', 'Your Page saved sucessfully', 'success');
  }
  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' });
  }
}
