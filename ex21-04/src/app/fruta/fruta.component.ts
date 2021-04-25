import { Component, OnInit } from '@angular/core';
import { Fruta } from '../Fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  fruta: Fruta = {
    name: 'Maçã',
    price: 1.99,
    lowSugar: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
