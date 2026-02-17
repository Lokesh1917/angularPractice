import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Carousel } from "./components/carousel/carousel";
import { Categories } from "./components/categories/categories";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import { Directives } from "./components/directives/directives";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Carousel,
    Categories,
    Body,
    Footer,
    Directives
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
