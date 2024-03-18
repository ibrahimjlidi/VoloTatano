// city.component.ts
import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cities: City[] =[];

  constructor(private cityService: CityService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getCities();
  }

  update(){
    this.http.post<City[]>('http://localhost:3000/admin/cities/:id',this.cities).subscribe((res:any)=>{
    if(res.result)
    {
      alert('done')
    }
    else{
      alert(res.message)
    }
  })

  }
  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
      // this.cities.forEach(element => {
      //   element.isEdit =false;
        
      // });
  }


  addNew() {
    const obj = {
      id :0 ,
      name : '',
      country : '',
      population : 0,
      imageUrl:''

    };
    this.cities.unshift(obj)
  }
}
