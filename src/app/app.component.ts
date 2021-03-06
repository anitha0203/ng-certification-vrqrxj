import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data:any;
      zcode: number;
      url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5a4b2d457ecbef9eb2a71e480b947604';
      ccond: number;
      temp: number;
      temp_max: number;
      temp_min: number;
d = new Date();day1: string;mon1: string;date1: number;day2: string;mon2: string;
date2: number;day3: string;mon3: string;date3: number;day4: string;mon4: string;
date4: number;day5: string;mon5: string;
date5: number;
weekday = [" ","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
month=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      constructor(private http: HttpClient) {}
      setZip(zipcode) {
        this.zcode = zipcode;
        localStorage.setItem('ZipCode : ', zipcode);
        this.getData();
      }
      getData() {
        this.http.get(this.url).subscribe((res) => {
          this.data = res;
          this.ccond = this.data.weather[0].main;
          this.temp = this.data.main.temp;
          this.temp_max = this.data.main.temp_max;
          this.temp_min = this.data.main.temp_min;
          console.log(this.ccond + '   ' + this.temp  + '   ' +this.temp_min + '   ' +this.temp_max );

            this.date1 = this.d.getDate();
          this.day1 = this.weekday[this.CheckDay(1)];
          this.mon1 = this.month[this.CheckMonth(this.d.getMonth())];
          console.log(" date " + this.date1+ "    " + this.mon1 + "  " + this.day1)
     
          this.date2 = this.d.getDate()+1;
          this.day2 = this.weekday[this.CheckDay(2)];
          this.mon2 = this.month[this.CheckMonth(this.d.getMonth())];
          console.log(" date " + this.date2+ "    " + this.mon2 + "  " + this.day2)
   
          this.date3 = this.d.getDate()+2;
          this.day3 = this.weekday[this.CheckDay(3)];
          this.mon3 = this.month[this.CheckMonth(this.d.getMonth())];
          console.log(" date " + this.date3+ "    " + this.mon3 + "  " + this.day3)
   
          this.date4 = this.d.getDate()+3;
          this.day4 = this.weekday[this.CheckDay(4)];
          this.mon4 = this.month[this.CheckMonth(this.d.getMonth())];
          console.log(" date " + this.date4+ "    " + this.mon4 + "  " + this.day4)
   
          this.date5 = this.d.getDate()+4;
          this.day5 = this.weekday[this.CheckDay(5)];
          this.mon5 = this.month[this.CheckMonth(this.d.getMonth())];
          console.log(" date " + this.date5 + "    " + this.mon5 + "  " + this.day5)
        


        });
      }
      CheckDay(day){
        if(day + this.d.getDay() > 7){
            return day + this.d.getDay() - 7;
        }
        else{
            return day + this.d.getDay();
        }
    }
    CheckMonth(month){
      if(month + this.d.getMonth() > 11){
          return month + this.d.getMonth() - 12;
      }
      else{
          return month + this.d.getMonth();
      }
  }
}