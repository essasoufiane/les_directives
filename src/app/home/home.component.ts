import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDisplayBox: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

    hideBox(){
      this.isDisplayBox = !this.isDisplayBox
    }
}
