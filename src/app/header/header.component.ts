import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loading =true
  constructor() { 
    setTimeout(()=>{    
      this.loading =false
      
    }, 1000);
  }

  ngOnInit(): void {

  }

}
