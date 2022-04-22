import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDisplayBox: boolean = true

  constructor() { }

  items: string[] = ['home','products','blog','contact']

  error: boolean = true

  ngOnInit(): void {
  }

    hideBox(){
      this.isDisplayBox = !this.isDisplayBox
    }
}
