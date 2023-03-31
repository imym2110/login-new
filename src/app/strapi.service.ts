import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
    apiurl = 'http://localhost:8501'
  constructor(private http: HttpClient, private route: Router) { }

  
  submitForm(temp: any) {
    console.log(temp, 'strapifrom_service');
    const url = 'http://localhost:8501/api/auth/local';
    const body =
    {
      "identifier": temp.identifier,
      "password": temp.password
    }

    // const body1  = 
    // {
    //   "identifier": "foobar",
    //   "password": "Test1234"
    // }
    console.log(body, 'from_body');
    
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    console.log(body, "Service")

    return this.http.post(url, body).subscribe((x: any) => {
      console.log(x, 'ssss')
      localStorage.setItem('access-token', x.jwt)


     // var headers_object = new HttpHeaders().set("Authorization", "Bearer " + x.jwt);
      this.route.navigate(['/about']);
      console.log(x.jwt, 'TOKEN');
    })
  }

  getToken() {
    return localStorage.getItem('access-token');
  }


  getStrapiData(){
    return this.http.get(this.apiurl + '/api/restaurants?populate=*')
  }
}
