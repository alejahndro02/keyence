import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img="../../../assets/img_js.png"
  title='Lenguajes de Programación'
  constructor() { }

  ngOnInit(): void {
  }



}
