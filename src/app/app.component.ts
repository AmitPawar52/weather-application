import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { IWeatherData } from './models/IWeatherData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NowDays Weather App';
  cityDetails: IWeatherData;
  cityDetails2: IWeatherData;

  ngOnInit() {
  }

  constructor(
    private weatherService: WeatherService,
  ) {}
  getCityDetails(woeid:number) {
    /*
      CHALLENGE
       - pass the city id to service.getCityDetails(woeid)
    */
    this.weatherService.getCityDetails(woeid).subscribe(data =>{
      this.cityDetails2 = data;
      this.cityDetails = this.cityDetails2;
    });
  }
}

