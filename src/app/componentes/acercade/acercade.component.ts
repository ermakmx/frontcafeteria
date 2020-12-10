import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  nombre = 'Jose German Lopez Regalado';
  fecha= new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
