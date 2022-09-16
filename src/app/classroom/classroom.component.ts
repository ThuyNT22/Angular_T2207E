import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-classroom',
  templateUrl: 'classroom.component.html'
})
export class ClassroomComponent extends Component{
  classroomName= 'T2207E';
  numberStudents= 12;

  upNumber(){
    this.numberStudents++;
  }

  studentName = 'Nguyễn Văn An';

  @Input()
  newClass ?: string;
}
