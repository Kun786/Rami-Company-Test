import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientManagementService {

  constructor(
    private readonly HttpClient:HttpClient
  ) { }

  createTask(payLoad:any){
    return this.HttpClient.post('http://localhost:4444/taskManagement/createTask', payLoad)
  }

  getTask(){
    return this.HttpClient.get('http://localhost:4444/taskManagement/getTask')
  }
  
  updateTaskStatus(payLoad:any){
    return this.HttpClient.post('http://localhost:4444/taskManagement/updateTaskStatus',payLoad)
  }

}
