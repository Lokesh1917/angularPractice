import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from "../databinding/databinding";
import { Directives } from "../directives/directives";
import { Mymodal } from "../mymodal/mymodal";
import { UserList } from "../user-list/user-list";
import { ProductList } from "../product-list/product-list";
import { PipeDemo } from "../pipe-demo/pipe-demo";
import { ParentDemo } from "../parent-demo/parent-demo";
import { HttpDemo1 } from "../http-demo1/http-demo1";
import { CommentList } from "../comment-list/comment-list";
import { EmployeeList } from "../employee-list/employee-list";
import { ObservableDemo1 } from "../observable-demo1/observable-demo1";
import { ObservableDemo2 } from "../observable-demo2/observable-demo2";
import { SubjectDemo1 } from "../subject-demo1/subject-demo1";
import { AlbumList } from '../album-list/album-list';
import { SignalDemo1 } from "../signal-demo1/signal-demo1";

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // Mymodal,
    // UserList,
    // ProductList,
    // PipeDemo,
    // ParentDemo,
    // HttpDemo1,
    // CommentList,
    // EmployeeList,
    // ObservableDemo1,
    // ObservableDemo2,
    // SubjectDemo1,
    // AlbumList,
    SignalDemo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class Body {

}
