import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  name: string = 'sAchIn TeNdUlacar';
}
