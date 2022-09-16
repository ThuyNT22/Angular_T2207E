import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends Component{
  student: IStudent = {id:1,name:'Nam',age:16,address:'8 ton that thuyet'};

  arrayNumber: number[] = [1,2,3,4,5]
  stringArray: string[] = ["Nguyễn Hoàng Nam",
    "Nguyễn Minh Khánh","Nguyễn Thuỳ Dương"];

ls: IStudent[] = [
  {id:1,name:"Nguyễn Hoàng Nam",age:19,address:'8 ton that thuyet'},
  {id:2,name:"Nguyễn Minh Khánh",age:21,address:'8 ton that thuyet'},
  {id:3,name:"Nguyễn Thuỳ Dương",age:16,address:'8 ton that thuyet'},
]

}

