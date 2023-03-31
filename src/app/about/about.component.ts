import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StrapiService } from '../strapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private route: Router, private strapi:StrapiService){}
  ngOnInit()
  {
    this.initData();
  }
  initData()
  {
    this.strapi.getStrapiData().subscribe(x=>{
      console.log(x,'Fresp')
    })
  }

  logOut(){
    localStorage.removeItem('access-token')
    this.route.navigate(['/login'])
  }
}
