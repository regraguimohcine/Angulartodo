import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:8081/todo";

  getalltasks(){
    return this.http.get<Task[]>(this.Url);
  }

  deletetask(id:any){
    return this.http.delete(this.Url+'/'+id);
  }

  addtask(task:any){
    return this.http.post<Task>(this.Url,task);
  }

  updatetask(task:any){
    return this.http.put<Task>(this.Url,task);
  }
}
