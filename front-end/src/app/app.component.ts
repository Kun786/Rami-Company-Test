import { Component } from '@angular/core';
import { ClientManagementService } from './shared/service/client-management.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'front-end';

  public task:any = {};
  public userTwo:any;
  public userThree:any;
  public userFour:any;
  constructor(
    private readonly ClientManagementService:ClientManagementService,
    private  readonly ToastrService: ToastrService
  ){

  }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(){
    this.ClientManagementService.getTask().subscribe(({result}:any) => {
      this.task = result[0];
    })
  }

  addTask(){
    const dataToSend = {
      task:'task is created',
      userRole1: true,
      stage: 'Add Task'
    }
    this.ClientManagementService.createTask(dataToSend).subscribe(({message, result, data}:any) => {
      this.ToastrService[data ? 'success':'error'](message);
      this.getTask();
    })
  }

  addVote(option: any) {
    const users = [this.userTwo, this.userThree, this.userFour];
    if (users.includes(undefined)) {
    this.ToastrService.error('All Users Must Approve To Proceed');
    return;
    }
    
    const objectToUpdate = {
    ...option,
    task: "task is created",
    userRole1: true,
    userRole2: this.userTwo,
    userRole3: this.userThree,
    userRole4: this.userFour,
    };
    console.log(objectToUpdate)
    this.ClientManagementService.updateTaskStatus(objectToUpdate).subscribe(({ message, data }: any) => {
    this.ToastrService[data ? 'success' : 'error'](message);
    this.getTask();
    [this.userTwo, this.userThree, this.userFour] = [undefined, undefined, undefined];
    });
    }

  removeVote(){

  }
  
}
