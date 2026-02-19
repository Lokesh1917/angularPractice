import { Routes } from '@angular/router';
import { Body } from './components/body/body';
import { FormDemo1 } from './components/form-demo1/form-demo1';
import { HttpDemo1 } from './components/http-demo1/http-demo1';
import { ObservableDemo1 } from './components/observable-demo1/observable-demo1';
import { SignalDemo1 } from './components/signal-demo1/signal-demo1';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Body },
  { path: 'form', component: FormDemo1 },
  { path: 'http', component: HttpDemo1 },
  { path: 'observables', component: ObservableDemo1 },
  { path: 'signals', component: SignalDemo1 },
];
