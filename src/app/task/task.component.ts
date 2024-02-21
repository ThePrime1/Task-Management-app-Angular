import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Task as TaskInterface } from '../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  task: TaskInterface;
  id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (!this.id) {
      throw new Error('Task id is required');
    }
    this.getTask(this.id);
  }

  getTask(id: string) {
    firstValueFrom(this.taskService.getTask(id)).then((r) => {
      this.task = { ...r };
    });
  }
}
