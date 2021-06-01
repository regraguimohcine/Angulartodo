import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  EditForm=false;
  ShowForm=false;

  mytask:Task={
    name:''
  }

  tasks:Task[]=[];
  
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    this.getalltasks();
  }

  getalltasks(){
    this.taskservice.getalltasks()
        .subscribe(tasks=>this.tasks=tasks)
  }

  deletetask(id:any){
    this.taskservice.deletetask(id)
        .subscribe(()=>{
          this.tasks=this.tasks.filter(task=>task.id!=id)
        });
  }

  addtask(){
    this.taskservice.addtask(this.mytask)
        .subscribe((task)=>{
          this.tasks=[task,...this.tasks];
        })
    this.resetform();
    this.ShowForm=false;
  }

  resetform(){
    this.mytask={
      name:''
    }
  }

  Show_task_info(task:any){
    this.mytask=task;
    this.EditForm=true;
    this.ShowForm=true;
  }

  updatetask(){
    this.taskservice.updatetask(this.mytask)
        .subscribe((task)=>{
          this.resetform();
          this.EditForm=false;
          this.ShowForm=false;
        })
  }

}
