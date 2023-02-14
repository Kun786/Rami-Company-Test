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

  public task:any;
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
      userRole1: true
    }
    this.ClientManagementService.createTask(dataToSend).subscribe(({message, result, data}:any) => {
      this.ToastrService[data ? 'success':'error'](message);
      this.getTask();
    })
  }

  addVote(option:any){
    let value = option.value;
    this.ClientManagementService.updateTaskStatus(value).subscribe(({message,data}:any) => {
      this.ToastrService[data ? 'success':'error'](message);
      this.getTask();
    })
  }

  removeVote(){

  }
  
}
