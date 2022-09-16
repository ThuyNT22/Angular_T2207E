import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../interfaces/foodmenu.interfaces";
import {HttpClient} from "@angular/common/http";
import {IFoodType, IType} from "../interfaces/foodtype.interfaces";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent {
  data: IMenu[] = [];
  type: IType[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {
  }

  ngOnInit(){//ham nay tu dong chay khi print giao dien ra
    const url1 = 'http://foodgroup.herokuapp.com/api/menu';
    this.http.get<IFoodMenu>(url1).subscribe(data1=>{
      this.data = data1.data;
    });
    const url2 = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<IFoodType>(url2).subscribe(data2=>{
      this.type = data2.data;
    });
  }
}
