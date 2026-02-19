import { Component } from '@angular/core';
import * as data from './user-data.json';
@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  //As the key defualt as a object we are doing a tyoe casting
  userArr = (data as any).default;

  constructor() {
    console.log(data);
  }

}
